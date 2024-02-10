import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

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