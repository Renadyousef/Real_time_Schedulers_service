// app.js
import express from "express";
import { WebSocketServer } from "ws";
import * as YWebSocket from "y-websocket";

import cors from "cors";

// Routes
import ScheduleRoutes from "./Routes/ScheduleRoutes.js";
import historyRoutes from "./Routes/HistoryRoutes.js";

const app = express();

// CORS configuration
const allowedOrigins = [
  "https://smart-schedule-phi.vercel.app", // Vercel
  "http://localhost:3000"                  // local client container
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-User-Id", "Cache-Control"],
    credentials: true,
  })
);

// JSON middleware
app.use(express.json());

// Routes
app.use("/schedule", ScheduleRoutes);
app.use("/history", historyRoutes);

// Export the app for ESM
export { app };
