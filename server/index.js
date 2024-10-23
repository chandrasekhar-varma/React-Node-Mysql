import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";

dotenv.config();
const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
app.use(express.json());
app.use("/auth", authRouter);
app.get("/", (req, res) => {
  console.log("req.body");
});

app.listen(process.env.PORT, () => {
  console.log("Server is Running");
  console.log(`Server is Running on:  ${process.env.PORT}`);
});
