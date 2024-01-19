import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { error } from "console";

dotenv.config();
mongoose
  .connect(process.env.mongoURL)
  .then(() => {
    console.log("DB connected...");
  })
  .catch((erroe) => {
    console.log(error);
  });

const app = express();

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
