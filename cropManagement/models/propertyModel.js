const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const propertySchema = mongoose.Schema({
    orgId: {
        type: ObjectId,
        ref: "Org"
    },
    state: { type: String ,
    required:true},
    regionId: {
        type: ObjectId,
        ref:"Region"
    }

}, { timesStamps: true })

module.exports=mongoose.model("Property",propertySchema)