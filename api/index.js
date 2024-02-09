import express from 'express';
import mongoose  from 'mongoose';
const app= express();
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from "./routes/user.routes.js";
const PORT = process.env.PORT


mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('Connected to Mongodb')
})
.catch((err)=>{
    console.log(err);
});

app.use("/api/user",userRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on Port : ${PORT}`);
})