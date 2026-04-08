const mongoose = require("mongoose");
require("dotenv").config()

async function connectDB(){
    try{
         await mongoose.connect(process.env.MONGODB_URI)
        console.log("MONGO DB CONNECTED SUCCESSFULLY!!")
    }catch(err){
        console.log("MONGODB FAILED!")
        process.exit(1)
    }
   
}

module.exports = connectDB;