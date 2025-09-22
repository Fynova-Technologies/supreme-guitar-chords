import { Router } from "express";
import { getFavorites, addFavorite, removeFavoriteById, removeFavoriteByDetails } from "../controllers/favorites.controller.js";

const router = Router();

router.get("/", getFavorites);
router.post("/", addFavorite);
router.delete("/", removeFavoriteByDetails); // For removing by artistName and songTitle
router.delete("/:id", removeFavoriteById);

export default router;