const propertyModel=require("../models/propertyModel")
const fieldModel=require("../models/fieldModel")
const regionModel=require("../models/regionModel")
const {isValidRequest,isValidObjectId,isValid}=require("../validator/validator")


const createProperty=async function(req,res){
    try{
        if (!isValidRequest(req.body)) {
            return res.status(400).send({ status: false, msg: "Please enter details for property." })
        }

       let orgId=req.params.orgId
       if (!isValidObjectId(orgId)) {
        return res.status(400).send({ status: false, message: 'Please provide valid orgId' })
    }
       let {state,region}=req.body
       if (!isValid(state)) {
        return res.status(400).send({ status: false, msg: "Please enter a valid statename." })
    }
    if (!isValid(region)) {
        return res.status(400).send({ status: false, msg: "region detail is required." })
    }
    let regionAvailable=await regionModel.findOne({name:region})
        if (!regionAvailable) {
            return res.status(404).send({ status: false, message: "region details not found" })
        }

       let regionId=regionAvailable._id
       let property={orgId,state,regionId}
       let savedDetails=await propertyModel.create(property)
       res.status(201).send({status:true,data:savedDetails})

    }
    catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}

// const createProperty=function(req,res){
//     try{

//     }
//     catch(error){
//         res.status(500).send({status:false,message:error.message})
//     }
// }
const getProperty=async function(req,res){
    try{
let propertyId=req.params.propertyId
        if (!propertyId)
            return res.status(400).send({ status: false, message: "Enter propertyId" })

        if (!isValidObjectId(propertyId)) {
            return res.status(400).send({ status: false, message: 'Please provide valid propertyId' })
        }
         
        let fieldDetails=await fieldModel.find({propertyId:propertyId})
        let propertyDetails=await propertyModel.findOne({_id:propertyId}).populate("regionId")
        propertyDetails._doc.fieldDetails=fieldDetails
        res.status(200).send({status:true,data:propertyDetails})
        
    }
    catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}

module.exports={createProperty,getProperty}