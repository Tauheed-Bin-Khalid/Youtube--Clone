import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./db/conn.js"
const app = express();
dotenv.config();
app.use(express.json())
// db()
app.use(cors({
    origin:true,
    credentials:true}))
const port = process.env.PORT || 5000;
app.use(cookieParser())
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/videos",videoRoutes);
app.use("/api/comments",commentRoutes);

app.use((err,req , res, next)=>{
    const status = err.status || 500;
    const message = err.message || "something wrong";
    return res.status(status).json({
        success:false,
        status,
        message
    })

})




app.listen(port, () => {
    console.log("Server is running on port ", port);
})
