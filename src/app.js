import express from "express";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
// cors configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "https://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorisation"],
  }),
);

import healthCheckRouter from "./routes/healthCheck.routes.js"

app.use("/api/v1/healthcheck",healthCheckRouter)

app.get("/", (req, res) => {
  res.send("Welcome aboard");
});

export default app;
