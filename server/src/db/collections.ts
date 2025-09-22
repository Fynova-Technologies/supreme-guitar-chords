import { Collection } from "mongodb";
import { getDb } from "./client.js";
import { ArtistDoc } from "../models/artist.js";
import { UserDoc } from "../models/user.js";
import { FavoriteDoc } from "../models/favorite.js";

export let ArtistsCollection: Collection<ArtistDoc>;
export let SongsCollection: Collection<any>;
export let UsersCollection: Collection<UserDoc>;
export let FavoritesCollection: Collection<FavoriteDoc>;

export function initCollections() {
  const db = getDb();
  ArtistsCollection = db.collection<ArtistDoc>("chordie_artists");
  SongsCollection = db.collection("songs");
  UsersCollection = db.collection<UserDoc>("users");
  FavoritesCollection = db.collection<FavoriteDoc>("favorites");

  // indexes (example)
  ArtistsCollection.createIndex({ name: 1 }, { unique: true }).catch(() => {});
  UsersCollection.createIndex({ email: 1 }, { unique: true }).catch(() => {});
  FavoritesCollection.createIndex({ userId: 1, artistName: 1, songTitle: 1 },{ unique: true }).catch(() => {});
}
