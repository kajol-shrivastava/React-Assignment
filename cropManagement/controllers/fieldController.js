const fieldModel=require("../models/fieldModel")
const cropCycleModel=require("../models/cropCycleModel")
const {isValidRequest,isValidObjectId}=require("../validator/validator")


const createfield= async function(req,res){
    try{
        if (!isValidRequest(req.body)) {
            return res.status(400).send({ status: false, msg: "Please enter details of feild." })

        }
        let propertyId=req.params.propertyId
        
        if (!isValidObjectId(propertyId)) {
            return res.status(400).send({ status: false, message: 'Please provide valid propertyId' })
        }
        let {crop,size,location}=req.body
        let cropCycleAvailable=await cropCycleModel.findOne({cropname:crop})
        if (!cropCycleAvailable) {
            return res.status(404).send({ status: false, message: "cropcycle not found" })
        }
        let cropcycleId=cropCycleAvailable._id
        let fieldDetails={propertyId,cropcycleId,size,location}
        let savedDetails=await fieldModel.create(fieldDetails)
        res.status(201).send({status:true,data:savedDetails})

    }
    catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}

const getfield= async function(req,res){
    try{
        let fieldId=req.params.fieldId
        if (!fieldId)
            return res.status(400).send({ status: false, message: "Enter fieldId" })

        if (!isValidObjectId(fieldId)) {
            return res.status(400).send({ status: false, message: 'Please provide valid fieldId' })
        }

        let fieldDetails=await fieldModel.findOne({_id:fieldId}).populate("cropcycleId")
        res.status(200).send({status:true,data:fieldDetails})

    }
    catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}

const updatefield=async function(req,res){
    try{
        if (!isValidRequest(req.body)) {
            return res.status(400).send({ status: false, msg: "Please enter details of feild." })

        }

        let fieldId=req.params.fieldId

       let {crop}=req.body
       let cropCycleAvailable=await cropCycleModel.findOne({cropname:crop})
        if (!cropCycleAvailable) {
            return res.status(404).send({ status: false, message: "cropcycle not found" })
        }
        console.log(cropCycleAvailable)
        let cropcycleId=cropCycleAvailable._id
        let fieldDetails={cropcycleId}
        let savedDetails=await fieldModel.findOneAndUpdate({_id:fieldId},fieldDetails,{new:true})
        res.status(200).send({status:true,data:savedDetails})


    }
    catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}
module.exports={createfield,getfield,updatefield}