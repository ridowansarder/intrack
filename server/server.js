import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
