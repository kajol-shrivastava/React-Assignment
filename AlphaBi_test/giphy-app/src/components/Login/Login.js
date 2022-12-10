import React, { useState } from "react"
import { Link,  useNavigate } from "react-router-dom";
import InputControl from "../InputControl/InputControl";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase"
import "./Login.css";


function Login(props) {
    const Navigate=useNavigate();
    const [values,setValues]=useState({
        email:"",
        password:"",
    })
    const [errorMsg,setErrorMsg]=useState("")
    const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false)

    const handleSubmission=  function(){
        console.log(values)

        if(!values.email||!values.password){
            setErrorMsg("Fill all the field to register")
            return;
        }
        setErrorMsg("")
         console.log(values)
         setSubmitButtonDisabled(true)
         signInWithEmailAndPassword(auth,values.email,values.password)
         .then(async(res)=>{
            setSubmitButtonDisabled(false)
            console.log(res.user)
            Navigate("/giphy")
            
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
           <h1 className="heading">Login</h1>
          <InputControl label="Email" placeholder="Enter Email Address"
              onChange={(e)=>{setValues((prev)=>({...prev,email:e.target.value}))}}
          /> 
          <InputControl label="Password"  placeholder="Enter Password"
            onChange={(e)=>{setValues((prev)=>({...prev,password:e.target.value}))}}

          />
          <div className="footer">
          <b className="error">{errorMsg}</b>
              <button onClick={handleSubmission} disabled={submitButtonDisabled}>Login</button>
              
              <p>
                  Don't  have an account?{"   "}
                  <span>
                      <Link to="/signup">Sign Up</Link>
                  </span>
              </p>
          </div>
      </div>

      </div>
    );
  }
  
  export default Login;