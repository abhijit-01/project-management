import dotenv from "dotenv";
import express from "express";
import app from "./app.js";
import connectDB from "./db/index.js";
import { connect } from "mongoose";
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running at port https://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error", err);
    process.exit();
  });
