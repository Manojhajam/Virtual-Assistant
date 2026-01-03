import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser())
app.use("/api/auth", authRouter)

app.get("/", (req, res) => {
    res.send("Hello!")
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running in PORT ${PORT}`)
})