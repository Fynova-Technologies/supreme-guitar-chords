import { getDb } from "./client.js";
export let ArtistsCollection;
export let SongsCollection;
export let UsersCollection;
export function initCollections() {
    const db = getDb();
    ArtistsCollection = db.collection("chordie_artists");
    SongsCollection = db.collection("songs");
    UsersCollection = db.collection("users");
    // indexes (example)
    ArtistsCollection.createIndex({ name: 1 }, { unique: true }).catch(() => { });
    UsersCollection.createIndex({ email: 1 }, { unique: true }).catch(() => { });
}
