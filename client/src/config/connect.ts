import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = import.meta.env.VITE_MONGO_URI!;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client;
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

