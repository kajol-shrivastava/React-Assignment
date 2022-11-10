const  express = require("express")
const {authentication}=require("../middleware/auth.js")
const {registration,login}=require("../controllers/userController.js")
const {createStudent,getStudents,getStudent, updateStudent, deleteStudent}=require("../controllers/studentController")
const router=express.Router()

router.get("/",function(req,res){
    
    res.send({status:true,message:"api is running"})
})

router.post("/users/register",registration)
router.post("/users/login",login)

router.post("/student",createStudent)
router.get("/student",getStudents)
router.get("/student/:id",getStudent)
router.put("/student/:id",authentication,updateStudent)
router.delete("/student/:id",authentication,deleteStudent)


module.exports=router