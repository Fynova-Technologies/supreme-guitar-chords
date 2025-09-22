import express from "express";
import http from "http";
import cors from "cors";
import { Server as SocketIOServer } from "socket.io";
import config from "./config/config.js";
import { connectMongo, closeMongo } from "./db/client.js";
import { initCollections } from "./db/collections.js";
import routes from "./routes/index.js";
import { setupSockets } from "./socket.js";
import compression from "compression";
async function startServer() {
    const app = express();
    app.use(cors({ origin: "*" }));
    app.use(express.json());
    // routes
    app.use("/api", routes);
    app.use(compression());
    // typed health handler — RequestHandler comes from express types
    const healthHandler = (_req, res) => {
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
    }
    catch (err) {
        console.error("Failed to start server", err);
        process.exit(1);
    }
}
startServer();
