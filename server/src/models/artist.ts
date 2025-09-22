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
  artist: string; // for aggregation compatibility
  title?: string; // for aggregation compatibility
};
