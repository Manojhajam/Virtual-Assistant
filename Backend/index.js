import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello!")
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running in PORT ${PORT}`)
})