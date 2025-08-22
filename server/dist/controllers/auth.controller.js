import { getManagementToken } from "../utils/auth.js";
import dotenv from "dotenv";
dotenv.config();
export async function checkEmailVerified(req, res) {
    try {
        const userId = req.query.user_id || "";
        if (!userId) {
            res.status(400).json({ error: "Missing user_id query parameter" });
            return;
        }
        const mgmtToken = await getManagementToken();
        if (!mgmtToken) {
            res.status(500).json({ error: "Failed to get management token" });
            return;
        }
        const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN || "dev-l0cnkmnrn4reomjc.us.auth0.com";
        const response = await fetch(`https://${AUTH0_DOMAIN}/api/v2/users/${encodeURIComponent(userId)}`, {
            headers: {
                Authorization: `Bearer ${mgmtToken}`,
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            const text = await response.text();
            res.status(response.status).json({ error: text || "Auth0 error" });
            return;
        }
        const user = await response.json();
        res.json({ email_verified: !!user.email_verified });
    }
    catch (err) {
        console.error("check-email-verified error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
}
export async function resendVerification(req, res) {
    try {
        const userId = req.auth?.sub; // comes from checkJwt middleware
        if (!userId) {
            res.status(401).json({ error: "Missing user identity" });
            return;
        }
        const mgmtToken = await getManagementToken();
        if (!mgmtToken) {
            res.status(500).json({ error: "Failed to get management token" });
            return;
        }
        const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN || "dev-l0cnkmnrn4reomjc.us.auth0.com";
        const response = await fetch(`https://${AUTH0_DOMAIN}/api/v2/jobs/verification-email`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${mgmtToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_id: userId }),
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Auth0 error:", errorData);
            res.status(response.status).json({ error: errorData });
            return;
        }
        // Some Auth0 responses may be empty, handle safely
        const responseText = await response.text();
        let job;
        try {
            job = responseText ? JSON.parse(responseText) : {};
        }
        catch {
            job = { status: "sent" };
        }
        res.json({
            success: true,
            message: "Verification email sent successfully",
            job,
        });
    }
    catch (err) {
        console.error("resend-verification error:", err);
        res.status(500).json({ error: "Failed to request verification email" });
    }
}
