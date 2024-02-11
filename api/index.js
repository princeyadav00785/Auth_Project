import express from 'express';
import mongoose  from 'mongoose';
const app= express();
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from "./routes/user.routes.js";
const PORT = process.env.PORT
import authRoutes from "./routes/auth.routes.js";
import cookieParser from 'cookie-parser';
app.use(express.json());
app.use(cookieParser());


mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('Connected to Mongodb')
})
.catch((err)=>{
    console.log(err);
});


app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/auth",authRoutes);
app.use((err,req,res,next)=>{
    const statusCode= err.statusCode||500;
    const message = err.message||"Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on Port : ${PORT}`);
})