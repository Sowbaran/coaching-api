const mongoose = require("mongoose");


const coachSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please enter the username for coach"]
    },
    email:{
         type:String,
        required:[true,"Please enter the email for coach"]
    },
    password:{
         type:String,
        required:[true,"Please enter the username for coach"]
    }
},{
    timestamps:true
})


module.exports =  mongoose.model("Coach",coachSchema)