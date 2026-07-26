const User = require("../models/User");
const bcrypt=require("bcrypt")
const generateToken=require("../utils/generateToken");

const registerUser=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        if(!name||!email||!password){
            return res.status(400).json({
                success:false,
                message:"Please fill all the fields"
            })
        }
        const existingUser= await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"user already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            name,
            email,
            password:hashedPassword
        })

        res.status(201).json({
            success:true,
            message:"user registered successfully.",
            token:generateToken(user._id),
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        })
    }catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

const loginUser=async(req,res)=>{
    try{
        const{email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({
                success:false,
                message:"please fill all the required  fields"
            })
        }
        const user= await User.findOne({email})
        if(!user){
            return res.status(401).json({
                success:false,
                message:"Invalid email or password"
            })
        } 
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(401).json({
                success:false,
                message:"Invalid password"
            })
        }
        res.status(200).json({
            success:true,
            message:"success login",
            token:generateToken(user._id),
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        })
    }catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        })
    }
}

const getCurrentUser= async(req,res)=>{
    try{
        res.status(200).json({
            success:true,
            user:req.user,
        });
    }catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports={
    registerUser,loginUser,getCurrentUser
}