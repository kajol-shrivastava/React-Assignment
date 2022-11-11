const jwt=require("jsonwebtoken")
const userModel=require("../models/userModel")
const {isValidRequest, isValid,isValidMobile,isValidMail}=require("../Validation/Validation")




const registration=async (req,res)=>{
   try{
    if(!isValidRequest(req.body)){
        return res.status(400).send({status:false,message:"Invalid Request"})
    }
   let {name,phone,email,password}=req.body
    let user={}
    if(!isValid(name)){
        //console.log(isValid(name))
        return res.status(400).send({status:false,message:"name is required"})
    }
    user.name=name
    if(!isValid(phone)){
        return res.status(400).send({status:false,message:"phone no is required"})
    }
    if(!isValidMobile(phone)){
        return res.status(400).send({status:false,message:"enter a valid indian phone no"})
    }

    let isPhoneAlreadyExist=await userModel.findOne({phone:phone})
    if(isPhoneAlreadyExist){
        return res.status(400).send({status:false,message:"phone no already registered"})    
       }
    user.phone=phone
    if(!isValid(email)){
        return res.status(400).send({status:false,message:"email is required"})
    }

   if(!isValidMail(email)){
    return res.status(400).send({status:false,message:"enter a valid email-Id"}) 
   }

   let isEmailAlreadyExist=await userModel.findOne({email:email})
   if(isEmailAlreadyExist){
    return res.status(400).send({status:false,message:"Email-id already registered"})    
   }
    user.email=email
    if(!isValid(password)){
        return res.status(400).send({status:false,message:"password is required"})
    }
    if(password.length<8||password.length>15){
        return res.status(400).send({status:false,message:"password should be of 8-15 characters"})
    }
    user.password=password
    //console.log(user)
    let data=await userModel.create(user)
   
    res.status(201).send({ status: true, message: "User registered",data:data})
   }
   catch(err){
       res.status(500).send({status:false,message:err.message})
   }
}

const login=async function(req,res){
    try{
        if(!isValidRequest(req.body)){
            return res.status(400).send({status:false,message:"Invalid Request"})
        }
        let {email,password}=req.body
        if(!isValid(email)){
            return res.status(400).send({status:false,message:"email is required"})
        }
    
       if(!isValidMail(email)){
        return res.status(400).send({status:false,message:"enter a valid email-Id"}) 
       }
        let user=await userModel.findOne({email:email})
        //console.log(user)
        if(!user){
            res.status(401).send({status:false,message:"not a registered email "})
        }
    
        if(!isValid(password)){
            return res.status(400).send({status:false,message:"password is required"})
        }
        if(password.length<8||password.length>15){
            return res.status(400).send({status:false,message:"password should be of 8-15 characters"})
        }
        if(user.password!==password){
            res.status(401).send({status:false,message:"incorrect password"})
        }
        let token=jwt.sign({userId:user._id},"Secret")
        res.status(200).send({status:true,message:"logged-In successfully",token:token})
    
    }
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }

}



module.exports={registration,login}