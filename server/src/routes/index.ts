import { Router } from "express";
import artistRoutes from "./artist.routes.js";
import contactRoutes from "./contact.routes.js";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";

const router = Router();

router.use("/artists", artistRoutes);
router.use("/contact", contactRoutes);
router.use("/", authRoutes);
router.use("/users", userRoutes);

export default router;
