import { Router } from "express";
import artistRoutes from "./artist.routes.js";
import contactRoutes from "./contact.routes.js";
import authRoutes from "./auth.routes.js";
const router = Router();
router.use("/artists", artistRoutes);
router.use("/contact", contactRoutes);
router.use("/", authRoutes);
export default router;
