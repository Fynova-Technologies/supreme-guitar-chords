import { ObjectId } from "mongodb";
import { FavoritesCollection } from "../db/collections.js";
import { FavoriteDoc } from "../models/favorite.js";

export async function getAllFavorites(userId: string): Promise<FavoriteDoc[]> {
  return FavoritesCollection.find({ userId }).toArray();
}

export async function addFavorite(userId: string, favorite: Omit<FavoriteDoc, "_id" | "userId">) {
  const res = await FavoritesCollection.insertOne({ 
    ...favorite, 
    userId 
  });
  return res;
}

export async function removeFavorite(userId: string, favoriteId: string) {
  const res = await FavoritesCollection.deleteOne({ 
    _id: new ObjectId(favoriteId), 
    userId 
  });
  return res;
}

export async function removeFavoriteByDetails(userId: string, artistName: string, songTitle: string) {
  const res = await FavoritesCollection.deleteOne({ 
    userId, 
    artistName, 
    songTitle 
  });
  return res;
}