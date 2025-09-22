import { Router } from "express";
import { getArtists, createArtist, getSingleArtist, getSongByArtistAndTitle } from "../controllers/artist.controller.js";
const router = Router();
router.get("/", getArtists);
router.post("/", createArtist);
router.get('/single', getSingleArtist);
router.get("/song", getSongByArtistAndTitle);
export default router;
