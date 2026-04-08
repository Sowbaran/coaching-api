
const mongoose = require("mongoose");


const studentSchema = mongoose.Schema({
    coach:{
        type:mongoose.Schema.Types.ObjectId,ref: 'Coach' 
    },
    name:{
        type:String,
        required:[true,"Please enter the student name"]
    },
    email:{
        type:String,
        required:[true,"Please enter the student email"]
    },
    phone:{
        type:Number,
        required:[true,"Please enter the student password"]
    }
},{
    timestamps:true
})


module.exports = mongoose.model("Student",studentSchema)