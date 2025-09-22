import { getDb } from "./client.js";
export let ArtistsCollection;
export let SongsCollection;
export let UsersCollection;
export let FavoritesCollection;
export function initCollections() {
    const db = getDb();
    ArtistsCollection = db.collection("chordie_artists");
    SongsCollection = db.collection("songs");
    UsersCollection = db.collection("users");
    FavoritesCollection = db.collection("favorites");
    // indexes (example)
    ArtistsCollection.createIndex({ name: 1 }, { unique: true }).catch(() => { });
    UsersCollection.createIndex({ email: 1 }, { unique: true }).catch(() => { });
    FavoritesCollection.createIndex({ userId: 1, artistName: 1, songTitle: 1 }, { unique: true }).catch(() => { });
}
