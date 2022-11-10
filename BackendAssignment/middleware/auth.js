const jwt=require("jsonwebtoken")

const authentication=async function(req,res,next){
    try{
        let token=req.headers["X-api-key"]||req.headers["x-api-key"]
        if(!token){
            res.status(401).send({status:false,message:"token must be present"})
        }

        jwt.verify(token,"Secret",function(err,decodedToken){
            if(err){
               return res.status(401).send({status:false,message:err.message})
            }
            else{
                req.loginId=decodedToken.userId
                next()
            }
            
        })

    }
    catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}

module.exports={authentication}