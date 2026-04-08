const coachModel = require("../models/coachModel");
const jwt = require("jsonwebtoken");
require("dotenv").config()
const bcrypt = require("bcryptjs")

const signin = async(req,res) =>{
 try{
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        return res.status(400).json({
            message:"bad request,missing data fields"
        })
    }
    const user = await coachModel.findOne({email})
    if(user){
        return res.status(400).json({
            mesage:"User Already exists"
        })
    }
    const hashedPassword= await bcrypt.hash(password,10)

    const data= await coachModel.create({
        username,
        email,
        password:hashedPassword
 })
    res.status(201).json({
        data
    })

 }catch(err){
    console.log(err.message)
    return res.status(500).json({
        message:"Servere error"
    })
   
 }
}


const login = async(req,res) =>{
    try{
        const{email, password} = req.body;
    if(!email || !password){
       return res.status(400).json({
            message:"bad request,missing data fields"
        })
    }
     const user = await coachModel.findOne({email})
    if(!user){
        return res.status(400).json({
            mesage:"User does'nt exists, register first"
        })
    }
    const payload={
        id:user.id,
        username:user.username
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(isMatch){
       const token = await jwt.sign(payload,process.env.ACCESSTOKEN,{expiresIn:'3h'})
       console.log(token)
        res.status(200).json({
            token
        })
    }else{
        return res.status(400).json({
            message:"Invalid password or email"
        })
    }
    
    }catch(err){
        console.log(err.message)
    return res.status(500).json({
        message:"Servere error"
    })
    }
    

}


module.exports = {signin,login}