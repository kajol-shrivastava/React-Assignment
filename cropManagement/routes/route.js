const express=require("express")
const {register,userLogin}=require("../controllers/orgController")
const {createCropCycle, getcropcycle}=require("../controllers/cropCycleController")
const {createProperty,getProperty}=require("../controllers/propertyController")
const {createfield, getfield,updatefield}=require("../controllers/fieldController")
const {createregion}=require("../controllers/regionController")
const {authentication}=require("../middlewares/auth")

const router=express.Router()

router.get("/",function(req,res){
    res.send({message:"api is testing"})
})

//=====================================================Organization routes==============================================
router.post("/register",register)
router.post("/login",userLogin)


//===================================================Propery routes==========================================
router.post("/property/:orgId",authentication,createProperty)
router.get("/property/:propertyId",authentication,getProperty)

//======================================================field routes=====================================
router.post("/field/:propertyId",authentication,createfield)
router.get("/field/:fieldId",authentication,getfield)
router.put("/field/:fieldId",authentication,updatefield)



//======================================================cropcycle routes=========================================
router.post("/cropcycle",createCropCycle)
router.get("/cropcycle/:cropId",getcropcycle)

//=======================================================region routes===========================================
router.post("/region",createregion)

module.exports=router