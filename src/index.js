import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

(async () => {
  try {
    await mongoose.connect(`${DB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.error("Err :", error);
      throw error;
    });
    app.listen(PORT, () => {
      console.log(`Backend Running on PORT : ${PORT}`);
    });
  } catch (error) {
    console.error("Error >>", error);
    throw error;
  }
})();
