const regionModel=require("../models/regionModel")
const {isValidRequest,isValid}=require("../validator/validator")


const createregion= async function(req,res){
    try{
        if (!isValidRequest(req.body)) {
            return res.status(400).send({ status: false, msg: "Please enter details of feild." })

        }
        let {name,states,avgtemp,summercrop,wintercrop,monsooncrop}=req.body
        if (!isValid(name)) {
            return res.status(400).send({ status: false, msg: "Please enter a valid name." })
        }

        if (!isValid(states)) {
            return res.status(400).send({ status: false, msg: "Please enter a valid statename." })
        }
        
        if (!isValid(summercrop)) {
            return res.status(400).send({ status: false, msg: "Please enter a valid data in summercrop." })
        }
        if (!isValid(wintercrop)) {
            return res.status(400).send({ status: false, msg: "Please enter a valid data in wintercrop." })
        }
        let regionDetails={name,states,avgtemp,summercrop,wintercrop,monsooncrop}
        let savedDetails=await regionModel.create(regionDetails)
        res.status(201).send({status:true,data:savedDetails})

    }
    catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}

const getregion=async function(req,res){
    try{
         let regionDetails=await regionModel.find()
         res.status(200).send({status:true,data:regionDetails})
      }
    catch(error){
        res.status(500).send({status:false,message:error.message})
    }
    
}

module.exports={createregion,getregion}
