const mongoose=require("mongoose")

const orgSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        max:15,
        min:8

    }
    
},{timestamps:true})

module.exports=mongoose.model("Org",orgSchema)