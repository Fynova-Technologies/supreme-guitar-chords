import { MongoClient, Db } from "mongodb";
import config from "../config/config.js";

let client: MongoClient | null = null;
const dbCache: Record<string, Db> = {};

export async function connectMongo(): Promise<MongoClient> {
  if (client) return client;
  if (!config.mongoUri) {
    throw new Error("MONGO_URI is not set in environment variables");
  }
  client = new MongoClient(config.mongoUri, {});

  await client.connect();
  console.log("Connected to MongoDB cluster");
  return client;
}

export function getDb(name: string = config.mongoDatabase): Db {
  if (!client)
    throw new Error("MongoClient not connected — call connectMongo() first");
  if (!dbCache[name]) {
    dbCache[name] = client.db(name);
    console.log("Database ready:", name);
  }
  return dbCache[name];
}

export async function closeMongo(): Promise<void> {
  if (!client) return;
  await client.close();
  client = null;
  Object.keys(dbCache).forEach((k) => delete dbCache[k]);
  console.log("Mongo connection closed");
}
