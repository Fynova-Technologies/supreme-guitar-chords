// import mongoose from "mongoose";

// const SongSchema = new mongoose.Schema({
//     title: String,
//     chords: String,
//     key: String,
//     type: String,
//     difficulty: String,
// })

// const ArtistSchema = new mongoose.Schema({
//     name: String,
//     songs: [SongSchema],
// })

// export const ArtistModel = mongoose.model('Artist', ArtistSchema);

import { ObjectId } from "mongodb";

export type SongSubdoc = {
  _id?: ObjectId;
  title: string;
  chords?: string;
  key?: string;
  type?: string;
  difficulty?: string;
  [key: string]: any;
};

export type ArtistDoc = {
  _id?: ObjectId | string;
  name: string;
  songs?: SongSubdoc[];
  // any other fields...
};
