const mongoose=require("mongoose")

const cropCycleSchema=mongoose.Schema({
    cropname:{
        type:String,
        required:true,
        trim:true
    },
    season:{
        type:String,
        enum:["kharif", "rabi","zaid"],
        required:true,
        trim:true
    },
    soiltype:{
        type:String,
        required:true,
        trim:true
    },
    duration:{
        type:String,
        required:true
    },
    preperationtime:{
        start:Number,
        end:Number
    },
    sowing:{
        start:Number,end:Number
    },
    water:{
        start:Number,end:Number
    },
    pestcontrol:{
        start:Number,end:Number
    },
    weedcontrol:{
        start:Number,end:Number
    },
    harvest:{
        start:Number,end:Number
    },
    

},{timesStamp:true})

module.exports=mongoose.model("CropCycle",cropCycleSchema)