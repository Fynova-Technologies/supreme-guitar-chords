import { Router } from "express";
import { getArtists, createArtist } from "../controllers/artist.controller.js";
const router = Router();
router.get("/", getArtists);
router.post("/", createArtist);
export default router;
