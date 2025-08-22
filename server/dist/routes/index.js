import { Router } from "express";
import contactRoutes from "./contact.routes.js";
import authRoutes from "./auth.routes.js";
const router = Router();
router.use("/contact", contactRoutes);
router.use("/", authRoutes);
export default router;
