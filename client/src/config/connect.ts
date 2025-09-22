import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = import.meta.env.VITE_MONGO_URI!;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
    maxPoolSize: 10,
  minPoolSize: 2,
  maxIdleTimeMS: 30000,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  
  // Performance settings
  retryWrites: true,
  writeConcern: { w: 'majority' },
  readPreference: 'primaryPreferred',
  
  // Connection compression
  compressors: ['zlib']
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

