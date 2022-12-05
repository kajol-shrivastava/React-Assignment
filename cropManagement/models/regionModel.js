const mongoose=require("mongoose")

const regionSchema=mongoose.Schema({
    name:{type:String,
        required:true},
    states:{
        type:[String]
    },
    summercrop:{type:[String]},
    wintercrop:{type:[String]},
    monsooncrop:{type:[String]}
},{timesStamps:true})

module.exports=mongoose.model("Region",regionSchema)