import { ObjectId } from "mongodb";

export interface FavoriteDoc {
  _id?: ObjectId;
  userId: string;
  artistName: string;
  songTitle: string;
}

