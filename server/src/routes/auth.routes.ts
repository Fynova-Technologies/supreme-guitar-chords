import { Router } from "express";
import { checkEmailVerified } from "../controllers/auth.controller.js";
import { resendVerification } from "../controllers/auth.controller.js";
import { checkJwt } from "../middleware/checkJwt.js";

const router = Router();

router.get("/check-email-verified-public", checkEmailVerified);
router.post("/resend-verification", checkJwt, resendVerification);

export default router;
