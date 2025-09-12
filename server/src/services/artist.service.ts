import { ObjectId } from "mongodb";
import { ArtistsCollection } from "../db/collections.js";
import { ArtistDoc, SongSubdoc } from "../models/artist.js";

export async function getAllArtists(): Promise<ArtistDoc[]> {
  // return all artist documents
  return ArtistsCollection.find({}).toArray();
}

export async function getArtistById(id: string): Promise<ArtistDoc | null> {
  return ArtistsCollection.findOne({ _id: new ObjectId(id) } as any);
}

export async function createArtist(artist: Pick<ArtistDoc, "name" | "songs">): Promise<any> {
  const res = await ArtistsCollection.insertOne({ ...artist, songs: artist.songs || [] });
  return res;
}

export async function addSongToArtist(artistId: string, song: SongSubdoc) {
  const res = await ArtistsCollection.updateOne(
    { _id: new ObjectId(artistId) } as any,
    { $push: { songs: { ...song, _id: new ObjectId() } } }
  );
  return res;
}

// more services: updateArtist, removeSong, deleteArtist...
