import { Router } from "express";
import { upsertUser } from "../controllers/auth.controller.js";
import { checkJwt } from "../middleware/checkJwt.js";
const router = Router();
// Create or update a user
router.post("/", checkJwt, upsertUser);
export default router;
