import dotenv from "dotenv";
dotenv.config();

export default {
  port: Number(process.env.PORT || 8000),
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017",
  mongoDatabase: process.env.MONGO_DATABASE || "development",
  auth0: {
    domain: process.env.AUTH0_DOMAIN || "",
    clientId: process.env.AUTH0_CLIENT_ID || "",
    clientSecret: process.env.AUTH0_CLIENT_SECRET || "",
    audience: process.env.AUTH0_AUDIENCE || "",
  },
};
