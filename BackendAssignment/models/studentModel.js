const mongoose=require("mongoose")

const studentSchema=mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:true},
    subject:{type:String,required:true},
    marks:{type:Number,required:true},
    total:{type:Number,default:0},
    isDeleted:{type:Boolean,default:false}

},{timestamps:true});

module.exports=mongoose.model("Student",studentSchema)