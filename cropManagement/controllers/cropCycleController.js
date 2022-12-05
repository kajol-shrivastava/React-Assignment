const cropCycleModel=require("../models/cropCycleModel")
const {isValidRequest,isValid,isValidObjectId}=require("../validator/validator")

const createCropCycle=async function(req,res){
    try{
        if (!isValidRequest(req.body)) {
            return res.status(400).send({ status: false, msg: "Please enter details for cropcycle." })
        }

        //extracting parmas form request body
        console.log(req.body)
        let { cropname,season,soiltype,duration,preperationtime,sowing,water,pestcontrol,weedcontrol,harvest}=req.body
        if (!isValid(cropname)) {
            return res.status(400).send({ status: false, msg: "Please enter the cropname." })
        }

        if (!isValid(season)) {
            return res.status(400).send({ status: false, msg: "Please enter the season." })
        }
        if (!isValid(soiltype)) {
            return res.status(400).send({ status: false, msg: "Please enter the soiltype." })
        }
        if (!isValid(duration)) {
            return res.status(400).send({ status: false, msg: "Please enter the duration." })
        }
        const savedDetails=await cropCycleModel.create(req.body)
        res.status(201).send({status:true,data:savedDetails})

    }
    catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}

const getcropcycle=async function(req,res){
    try{
        let cropId=req.params.cropId
        

        if (!isValidObjectId(cropId)) {
            return res.status(400).send({ status: false, message: 'Please provide valid cropId' })
        }
         
        
        let cropDetails=await cropCycleModel.findOne({_id:cropId})
        if (!cropDetails) {
            return res.status(404).send({ status: false, message: "cropcycle not found" })
        }
        
        res.status(200).send({status:true,data:cropDetails})
    }
    catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}

module.exports={createCropCycle,getcropcycle}