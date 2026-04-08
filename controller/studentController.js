const Student = require("../models/studentModel");


const getStudents = async(req,res) =>{
    try{
        const students = await Student.find({ coach: req.user.id });
        if(!students){
            return res.status(404).json({
                message:"No students found"
            })
        }
        res.status(200).json({
            students
        })
    }catch(err){
         console.log(err.message)
    return res.status(500).json({
        message:"Servere error"
    })
    }
}

const getStudent = async(req,res) =>{
    try{
        const id = req.params.id;
        const student = await Student.findById(id);
        if(!student){
            return res.status(404).json({
                message:"student not found"
            })
        }
        res.status(200).json({
            student
        })
    }catch(err){
         console.log(err.message)
    return res.status(500).json({
        message:"Servere error"
    })
    }
}


const createStudent = async(req,res) =>{
    try{
        const coach = req.user.id
        const {name,email,phone} = req.body;
        if(!coach || !name || !email || !phone){
            return res.status(404).json({
                message:"missing data field"
            })
        }

        const student = await Student.findOne({email})
        if(student){
            return res.status(400).json({
                message:"Student aleady exists"
            })
        }
        const createdStudent = await Student.create({
            coach,
            name,
            email,
            phone
        })
        res.status(201).json({
            message:"Student created successfully",
            createdStudent
        })
    }catch(err){
         console.log(err.message)
    return res.status(500).json({
        message:"Servere error"
    })
    }
}

const updateStudent = async(req,res) =>{
    try{
        const id = req.params.id;
        const student = await Student.findById(id);
        if(!student){
            return res.status(404).json({
                message:"student not found"
            })
        }
        const updatedStudent = await Student.findByIdAndUpdate(id,req.body);
        res.status(200).json({
            updatedStudent
        })
    }catch(err){
         console.log(err.message)
    return res.status(500).json({
        message:"Servere error"
    })
    }
}


const deleteStudent = async(req,res) =>{
    try{
        const id = req.params.id;
        const student = await Student.findById(id);
        if(!student){
            return res.status(404).json({
                message:"student not found"
            })
        }
        const deletedStudent = await Student.findByIdAndDelete(id);
        res.status(200).json({
            message:"Student deleted successfully"
        })
    }catch(err){
         console.log(err.message)
    return res.status(500).json({
        message:"Servere error"
    })
    }
}


module.exports = {getStudents,getStudent,createStudent,updateStudent,deleteStudent}