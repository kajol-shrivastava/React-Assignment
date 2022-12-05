const orgModel=require("../models/organizationModel")
const jwt=require("jsonwebtoken")
const {isValidRequest,isValidMail,isValidPassword,isValidName,isValid}=require("../validator/validator")

const register=async function(req,res){
    try{
        if (!isValidRequest(req.body)) {
            return res.status(400).send({ status: false, msg: "Please enter details for  registration." })
        }

        //extracting parmas form request body
        let {name,address,email,password}=req.body
        if (!isValid(name)) {
            return res.status(400).send({ status: false, msg: "Please enter name for registration." })
        }
        if (!isValidName(name)) {
            return res.status(400).send({ status: false, msg: `${name} is not a valid fname.` })
        }

        if (!isValid(address)) {
            return res.status(400).send({ status: false, msg: "Please enter address for registration." })
        }

        if (!isValid(email)) {
            return res.status(400).send({ status: false, message: "email is required" })
        }

        if (!isValid(password)) {
            return res.status(400).send({ status: false, message: "password is required" })
        }

        if (!isValidMail(email)) {
            return res.status(400).send({ status: false, message: "Please enter a valid email" })
        }

        if (!isValidPassword(password)) {
            return res.status(400).send({ status: false, msg: "Please enter a password which contains min 8 and maximum 15 " })
        }

        const loginUser = await orgModel.findOne({ email: email })
        if (loginUser) {
            return res.status(400).send({ status: false, message: "email already registered" })
        }

        
        const savedDetails=await orgModel.create(req.body)
        res.status(201).send({status:true,data:savedDetails})

    }
    catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}

const userLogin = async function (req, res) {
    try {
        let data = req.body

        if (!isValidRequest(data)) {
            return res.status(400).send({ status: false, message: "Invalid Request" })
        }

        let { email, password } = data
        if (!isValid(email)) {
            return res.status(400).send({ status: false, message: "email is required" })
        }

        if (!isValid(password)) {
            return res.status(400).send({ status: false, message: "password is required" })
        }

        if (!isValidMail(email)) {
            return res.status(400).send({ status: false, message: "Please enter a valid email" })
        }

        if (!isValidPassword(password)) {
            return res.status(400).send({ status: false, msg: "Please enter a password which contains min 8 and maximum 15 " })
        }

        const loginUser = await orgModel.findOne({ email: email })
        if (!loginUser) {
            return res.status(401).send({ status: false, message: "Not register email-id" })
        }

        if(password!==loginUser.password){
            return res.status(401).send({ status: false, message: "incorrect password" })
        }

        let token = jwt.sign(
            {
                userId: loginUser._id,
                iat: Math.floor(Date.now() / 1000),
            }, "pro@3", { expiresIn: '10h' }
        )
        res.setHeader("x-api-key", token)
        let dataToBeSend = { usedId: loginUser._id, token  }
        res.status(200).send({ status: true, message: 'User login successfull', data: dataToBeSend })

    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}


module.exports={register,userLogin}