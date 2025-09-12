import { Collection } from "mongodb";
import { getDb } from "./client.js";
import { ArtistDoc } from "../models/artist.js";
import { UserDoc } from "../models/user.js";

export let ArtistsCollection: Collection<ArtistDoc>;
export let SongsCollection: Collection<any>;
export let UsersCollection: Collection<UserDoc>;

export function initCollections() {
  const db = getDb();
  ArtistsCollection = db.collection<ArtistDoc>("chordie_artists");
  SongsCollection = db.collection("songs");
  UsersCollection = db.collection<UserDoc>("users");

  // indexes (example)
  ArtistsCollection.createIndex({ name: 1 }, { unique: true }).catch(() => {});
  UsersCollection.createIndex({ email: 1 }, { unique: true }).catch(() => {});
}
