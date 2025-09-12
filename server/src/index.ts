// import dotenv from 'dotenv';
// import express, { Request, Response } from 'express';
// import http from 'http';
// import { Server as SocketIOServer } from 'socket.io';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import routes from './routes/index.js'

// dotenv.config();

// const MONGO_URI = process.env.MONGO_URI!;
// const MONGO_DATABASE = process.env.MONGO_DATABASE!;
// const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8000;

// const app = express();
// const httpServer = http.createServer(app);
// const io = new SocketIOServer(httpServer, {
//   cors: { origin: '*', methods: ['GET', 'POST'] },
// });

// app.use(cors());
// app.use(express.json());

// interface Song {
//   _id: mongoose.Types.ObjectId;
//   name: string;
//   songs: Song[];
//   title: string;
//   artist: string;
//   [key: string]: any;
// }

// app.get('/api/artists', async (_req: Request, res: Response): Promise<void> => {
//     const db = mongoose.connection.db!;

//     // Check if database connection is available
//     if (!db) {
//       console.error('Database connection not available');
//       res.status(500).json({ error: 'Database connection not available' });
//       return;
//     }

//     try {
//       const artistsDoc = await db
//         .collection('chordie_artists')
//         .findOne({ _id: 'all_artists' } as any);  // see next section

//       if (!artistsDoc?.artists) {
//         res.status(404).json({ error: 'Artists not found' });
//         return;
//       }

//       res.status(200).json(artistsDoc.artists);
//     } catch (err) {
//       console.error('Error fetching artists:', err);
//       res.status(500).json({ error: 'Fetch failed' });
//     }
//   }
// );

// app.use("/api", routes);

// async function startServer() {
//   try {
//     await mongoose.connect(MONGO_URI, {
//       dbName: MONGO_DATABASE,   // no useNewUrlParser / useUnifiedTopology here
//     });
//     console.log('MongoDB connected to', mongoose.connection.db!.databaseName);

//     // setup change stream
//     if (!mongoose.connection.db) {
//     throw new Error('MongoDB connection not established');
//     }

//     const changeStream = mongoose.connection.db
//         .collection('chordie_artists')
//         .watch([], { fullDocument: 'updateLookup' });

//     // Listen for any change in `songs`
//     changeStream.on('change', (change) => {
//         console.log('Songs collection changed:', change.operationType);
//         io.emit('artistsChanged', change);
//     });

//     httpServer.listen(PORT, () => {
//       console.log(`Server listening at http://localhost:${PORT}`);
//     });
//   } catch (err) {
//     console.error('Failed to connect to MongoDB:', err);
//     process.exit(1);
//   }
// }

// startServer();

import dotenv from "dotenv";
dotenv.config();

import express, { RequestHandler } from "express";
import http from "http";
import cors from "cors";
import { Server as SocketIOServer } from "socket.io";
import config from "./config/config.js";
import { connectMongo, closeMongo } from "./db/client.js";
import { initCollections } from "./db/collections.js";
import routes from "./routes/index.js";
import { setupSockets } from "./socket.js";

async function startServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  // routes
  app.use("/api", routes);

  // typed health handler — RequestHandler comes from express types
  const healthHandler: RequestHandler = (_req, res) => {
    res.json({ status: "ok" });
  };
  app.get("/health", healthHandler);

  const httpServer = http.createServer(app);
  const io = new SocketIOServer(httpServer, {
    cors: { origin: "*", methods: ["GET", "POST"] },
  });

  try {
    await connectMongo();
    initCollections();
    setupSockets(io);

    const port = config.port;
    httpServer.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });

    process.on("SIGINT", async () => {
      console.log("SIGINT received, shutting down");
      io.close();
      httpServer.close();
      await closeMongo();
      process.exit(0);
    });
  } catch (err) {
    console.error("Failed to start server", err);
    process.exit(1);
  }
}

startServer();
