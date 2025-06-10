import { MongoClient } from 'mongodb';

export const getSongs = async (client: MongoClient) => {
  const db = client.db("music");
  const songs = db.collection("songs");
  return await songs.find({}).toArray();
};
