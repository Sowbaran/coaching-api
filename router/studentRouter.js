const express = require("express")
const  router = express.Router()
const {getStudent,getStudents,createStudent,updateStudent,deleteStudent} = require("../controller/studentController")

router.route('/students').get(getStudents).post(createStudent)
router.route('/student/:id').get(getStudent).patch(updateStudent).delete(deleteStudent)


module.exports = router;
