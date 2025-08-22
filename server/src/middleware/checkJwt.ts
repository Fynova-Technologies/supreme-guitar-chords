import { expressjwt } from "express-jwt";
import jwksRsa from "jwks-rsa";
import dotenv from "dotenv";

dotenv.config();

export const checkJwt = expressjwt({
  // Dynamically provide a signing key based on the kid in the header
  requestProperty: "auth",
  secret: jwksRsa.expressJwtSecret({
    cache: true, rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-l0cnkmnrn4reomjc.us.auth0.com/.well-known/jwks.json`
  }),
  // Validate the audience and the issuer
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://dev-l0cnkmnrn4reomjc.us.auth0.com/`,
  algorithms: ["RS256"]
});