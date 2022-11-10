const studentModel=require("../models/studentModel")
const {isValid,isValidRequest,isValidMail,isValidMobile}=require("../Validation/Validation")

const createStudent=async function(req,res){
    try{
        if(!isValidRequest(req.body)){
            return res.status(400).send({status:false,message:"Invalid Request"})
        }
        let {name,age,email,subject,marks}=req.body
        if(!isValid(name)){
            //console.log(isValid(name))
            return res.status(400).send({status:false,message:"name is required"})
        }
        if(!age){
            return res.status(400).send({status:false,message:"age is required"}) 
        }

        if(!isValid(email)){
            return res.status(400).send({status:false,message:"email is required"})
        }
    
       if(!isValidMail(email)){
        return res.status(400).send({status:false,message:"enter a valid email-Id"}) 
       }
    
       let isEmailAlreadyExist=await studentModel.findOne({email:email})
       if(isEmailAlreadyExist){
        return res.status(400).send({status:false,message:"Email-id already registered"})    
       }
       if(!isValid(subject)){
        return res.status(400).send({status:false,message:"subject is required"})
    }
    if(!marks){
        return res.status(400).send({status:false,message:"please enter marks"})
    }
        let total=0
        total=total+marks
        let studentDetail={name,age,email,subject,marks,total}
        let data=await studentModel.create(studentDetail)
        res.status(201).send({status:true,message:"student detail added",data:data})

    }
    catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}

const getStudents=async function(req,res){
    try{
        let filter=req.query
        if(!isValidRequest(filter)){
            return res.status(400).send({status:false,message:"Invalid Request"})
        }
        filter.isDeleted=false
        let data=await studentModel.find(filter)
        res.status(200).send({status:true,data:data})


    }
    catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}

const getStudent=async function(req,res){
    try{
       let userId=req.params.id
       let student=await studentModel.findOne({_id:userId,isDeleted:false})
       if(!student){
        return res.status(404).send({status:false,message:"student with this id not found"})
    }
       return res.status(200).send({status:true,data:student})
    }
    catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}

const updateStudent=async function(req,res){
    try{
        let id=req.params.id
        let student=await studentModel.findById(id)
        if(!student){
            res.status(400).send({status:false,message:"student with this id not found"})
        }
        if(!isValidRequest(req.body)){
            return res.status(400).send({status:false,message:"Invalid Request"})
        }
        console.log(student)
        let {name,age,subject,marks}=req.body
        let data={}
        if(name){
            data.name=name
        }
        if(age){
            data.age=age
        }
        if(subject){
            data.subject
        }
        if(marks){
         data.marks=marks,
         data.total=student.total+req.body.marks
        }
        
        console.log(id,data)
        let updatedInfo=await studentModel.findOneAndUpdate({_id:id,isDeleted:false},data,{new:true})
        res.status(200).send({status:true,data:updatedInfo})
        



    }
    catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}


const deleteStudent=async function(req,res){
    let id=req.params.id
    let student=await studentModel.findOne({_id:id,isDeleted:false})
    if(!student){
        res.status(404).send({status:false,message:"student with this id not found"})
    }
    
    let updatedInfo=await studentModel.findOneAndUpdate({_id:id},{isDeleted:true})
    res.status(200).send({status:true,message:"Record Deleted Successfully"})
    

}

module.exports={createStudent,getStudents,getStudent,updateStudent,deleteStudent}