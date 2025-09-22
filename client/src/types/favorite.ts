import { ObjectId } from "mongodb";

export interface Favorite {
  _id?: string;
  userId: string;
  artistName: string;
  songTitle: string;
}