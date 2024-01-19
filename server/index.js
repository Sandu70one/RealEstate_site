import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { error } from "console";

//Routes
import testRouter from "./routes/test.route.js";

// import userRoutes from "./routes/user.routes.js";
// import postRoutes from "./routes/postRoutes.js";
// import commentRoutes from "./routes/commentRoutes.js";
// import likeRoutes from "./routes/likeRoutes.js";
// import authRoutes from "./routes/authRoutes.js";

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

app.use("/api/path", testRouter);
