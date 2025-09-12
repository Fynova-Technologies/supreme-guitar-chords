// src/controllers/artist.controller.ts
import { RequestHandler } from "express";
import * as artistService from "../services/artist.service.js";

// GET /api/artists
export const getArtists: RequestHandler = async (req, res) => {
  try {
    const artists = await artistService.getAllArtists();
    res.json(artists); // don't `return` here — RequestHandler should return void
  } catch (err) {
    console.error("getArtists error", err);
    res.status(500).json({ error: "Failed to fetch artists" });
  }
};

// POST /api/artists
export const createArtist: RequestHandler = async (req, res) => {
  try {
    const { name, songs } = req.body;
    if (!name) {
      res.status(400).json({ error: "artist name required" });
      return;
    }
    const result = await artistService.createArtist({ name, songs });
    res.status(201).json({ insertedId: result.insertedId });
  } catch (err) {
    console.error("createArtist error", err);
    res.status(500).json({ error: "Failed to create artist" });
  }
};
