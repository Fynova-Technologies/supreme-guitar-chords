// import dotenv from 'dotenv';

// dotenv.config();

// interface Config {
//     port: number;
//     mongo_uri: string;
//     mongo_database: string;
// }

// // loads your environment variables from a .env file and provides type checking.
// const config: Config = { 
//     port: Number(process.env.PORT) || 3000,
//     mongo_uri: process.env.MONGO_URI || 'development',
//     mongo_database: process.env.MONGO_DATABASE || 'development'
// }

// export default config;

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
