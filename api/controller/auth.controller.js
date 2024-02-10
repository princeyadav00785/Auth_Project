import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import  Jwt  from "jsonwebtoken";

export const signup =  async (req,res,next)=>{
    const {username , email, password}=req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username , email , password:hashedPassword});
   try {await  newUser.save();
    res.status(201).json({ message: 'Signup successful' })
 
} catch(error){
    
    if(error.message.includes('username_1 dup key')){
        res.status(400).json({error:'Usernme already exists'});
    }else if(error.message.includes('email_1 dup key')){
        res.status(400).json({message:"Email Already exists"});
    }
  
    else{ 
    // res.status(500).json({error:"Internal Server Error"});
    // next(errorHandler(500,error.message));
    next(error);
}
}

};


export const signin =  async (req,res,next)=>{
    const {email, password}=req.body;
   try {
    const validUser = await User.findOne({email});
    if(!validUser)return next(errorHandler(401,"User not found"));
   const validPassowrd = bcryptjs.compareSync(password,validUser.password);
   if(!validPassowrd)return next(errorHandler(401,"Invalid password"));
   const token =Jwt.sign({id:validUser._id},process.env.JWT_SECRET);
   const {password:hashedPassword, ...rest}=validUser._doc;
   const expiryDate = new Date(Date.now()+3600000);
   res.cookie('access_token', token , {httpOnly:true, expires:expiryDate}).status(200).json(rest);

   } catch (error) {
    next(error);
   }
}