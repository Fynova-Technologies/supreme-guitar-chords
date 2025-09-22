import { RequestHandler } from "express";
import * as favoritesService from "../services/favorites.service.js";

// GET /api/favorites
export const getFavorites: RequestHandler = async (req, res) => {
    try {
        const userId = (req.query.user_id as string) || "";
        if (!userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const favorites = await favoritesService.getAllFavorites(userId.toString());
        res.json(favorites);
    } catch (err) {
        console.error("getFavorites error", err);
        res.status(500).json({ error: "Failed to fetch favorites" });
    }
}

// POST /api/favorites
export const addFavorite: RequestHandler = async (req, res) => {
    try {
        const userId = (req.query.user_id as string) || "";
        if (!userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const { artistName, songTitle } = req.body;
        if (!artistName || !songTitle) {
            res.status(400).json({ error: "artistName and songTitle are required" });
            return;
        }
        
        const result = await favoritesService.addFavorite(userId.toString(), { 
            artistName, 
            songTitle 
        });
        res.status(201).json({ insertedId: result.insertedId });
    } catch (err: unknown) {
        console.error("addFavorite error", err);
        if (err instanceof Error && 'code' in err && (err as any).code === 11000) {
            res.status(400).json({ error: "Favorite already exists" });
        } else {
            res.status(500).json({ error: "Failed to add favorite" });
        }
    }
}

// DELETE /api/favorites/:id (remove by MongoDB _id)
export const removeFavoriteById: RequestHandler = async (req, res) => {
    try {
        const userId = (req.query.user_id as string) || "";
        if (!userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        
        const favoriteId = req.params.id;
        if (!favoriteId) {
            res.status(400).json({ error: "favoriteId is required" });
            return;
        }
        
        const result = await favoritesService.removeFavorite(userId.toString(), favoriteId);
        if (result.deletedCount === 0) {
            res.status(404).json({ error: "Favorite not found" });
            return;
        }
        res.status(204).end();
    } catch (err) {
        console.error("removeFavoriteById error", err);
        res.status(500).json({ error: "Failed to remove favorite" });
    }
}

// DELETE /api/favorites (remove by artistName and songTitle)
export const removeFavoriteByDetails: RequestHandler = async (req, res) => {
    try {
        const userId = (req.query.user_id as string) || "";
        if (!userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        
        const { artistName, songTitle } = req.body;
        if (!artistName || !songTitle) {
            res.status(400).json({ error: "artistName and songTitle are required" });
            return;
        }
        
        const result = await favoritesService.removeFavoriteByDetails(userId.toString(), artistName, songTitle);
        if (result.deletedCount === 0) {
            res.status(404).json({ error: "Favorite not found" });
            return;
        }
        res.status(204).end();
    } catch (err) {
        console.error("removeFavoriteByDetails error", err);
        res.status(500).json({ error: "Failed to remove favorite" });
    }
}