import { ObjectId } from "mongodb";
import { ArtistsCollection } from "../db/collections.js";
export async function getAllArtists() {
    const artists = await ArtistsCollection.find({}).toArray();
    // make sure every artist has songs array
    return artists.map(a => ({ ...a, songs: a.songs || [] }));
}
export async function getArtistById(id) {
    return ArtistsCollection.findOne({ _id: new ObjectId(id) });
}
export async function createArtist(artist) {
    const res = await ArtistsCollection.insertOne({ ...artist, songs: artist.songs || [] });
    return res;
}
export async function addSongToArtist(artistId, song) {
    const res = await ArtistsCollection.updateOne({ _id: new ObjectId(artistId) }, { $push: { songs: { ...song, _id: new ObjectId() } } });
    return res;
}
// more services: updateArtist, removeSong, deleteArtist...
