const mongoose=require("mongoose")
const ObjectId=mongoose.Schema.Types.ObjectId

const FieldSchema=mongoose.Schema({
    propertyId:{
        type:ObjectId,
        ref:"Property"
    },
    cropcycleId:{
        type:ObjectId,
        ref:"CropCycle"
    },
    size:{
        type:String,
        required:true
    },
    location:{
        latitude:{type:Number,required:true},longitude:{type:Number,required:true}
    }
})

module.exports=mongoose.model("Field",FieldSchema)