import React, { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom";
import InputControl from "../InputControl/InputControl";
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import {auth} from "../../firebase"
import "./SignUp.css";


function SignUp(props) {
    const Navigate=useNavigate();
    const [values,setValues]=useState({
        name:"",
        email:"",
        password:"",
    })
    const [errorMsg,setErrorMsg]=useState("")
    const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false)

    const handleSubmission=  function(){
        if(!values.name||!values.email||!values.password){
            setErrorMsg("Fill all the field to register")
            return;
        }
        setErrorMsg("")
         console.log(values)
         setSubmitButtonDisabled(true)
         createUserWithEmailAndPassword(auth,values.email,values.password)
         .then(async(res)=>{
            setSubmitButtonDisabled(false)
            console.log(res.user)
            const user=res.user
            await updateProfile(user,{
                displayName:values.name
            })
            Navigate("/")
            
         })
         .catch((err)=>{
             console.log("Error:",err.message)
             setSubmitButtonDisabled(false)
             setErrorMsg(err.message)
         });
         
         
    }
    return (
        <div className="container">
            <div className="innerBox">
                <h1 className="heading">Sign Up</h1>
                <InputControl label="Username" placeholder="Enter your name" 
                    onChange={(e)=>setValues((prev)=>({...prev,name:e.target.value}))}
                />
                <InputControl label="Email" placeholder="Enter Email Address"
                    onChange={(e)=>setValues((prev)=>({...prev,email:e.target.value}))}

                 />
                <InputControl label="Password" placeholder="Enter Password" 
                    onChange={(e)=>setValues((prev)=>({...prev,password:e.target.value}))}
                 />
                <div className="footer">
                <b className="error">{errorMsg}</b>
                    <button  onClick={handleSubmission} disabled={submitButtonDisabled}>SignUp</button>
                    <p>
                        Already  have an account?{"   "}
                        <span>
                            <Link to="/login">Login</Link>
                        </span>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default SignUp;