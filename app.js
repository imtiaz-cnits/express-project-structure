import cookie from "cookie-parser";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import mongoose from "mongoose";

const app = express();

// Middleware Implementation
app.use(cors());
app.use(helmet());
app.use(hpp());
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter());
app.use(cookie());

// Disable Response Cache
app.set("etag", false);

// Database Connection
app.use(mongoose());
