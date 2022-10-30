import { useState } from "react"
import PreviewResults from "./previewResults"

const Formhandling=()=>{
    const[firstname,setFirstName]=useState("")
    const[gender,setGender]=useState("")
    const[edu,setEdu]=useState("")

    const setChange=(event)=>{
        
    }
    const [preview,setPreview]=useState(false)
    return(
        
        <div><h3>1.This is form handling Assignment  </h3>
        <div className="formContainer"  style={{
                padding: "10px",
                border: "1px solid #444",
                fontSize: "18px",
                textAlign:"center"

              }}>
        <form onSubmit={(event)=>{
            event.stopPropagation();//to stop default behaviour of the form on submission
            event.preventDefault();
            setPreview(true)
        }}>
        <label htmlFor="firstname">Name  :   
        <input type="text" name="firstname" value={firstname} onChange={(event)=>setFirstName(event.target.value)}/></label>
        <br/>
        <div value={gender} onChange={(event)=>setGender(event.target.value)}>
        <label >Gender   :</label>
        <label htmlFor="gender"><input name="gender" type="radio" value="Male"/>Male</label>
        <label htmlFor="gender"><input name="gender" type="radio" value="Female"></input>Female</label><br/>
        </div>
        
        <div value={edu} onChange={(event)=>{
            setEdu(edu+"  "+(event.target.value))
            console.log()
            }}>
        <label htmlFor="edu">Education Qualification :</label><br/>
        <label><input name="edu1" type="checkbox" value="BCA"/>BCA</label><br/>
        <label><input name="edu2" type="checkbox" value="MCA"/>MCA</label><br/>
        <label><input  name="edu3" type="checkbox" value="MBA"/>MBA</label><br/>
        </div>
        <button type="submit">submit</button>
        </form>
        </div>
       
        <PreviewResults 
        firstname={firstname} //props to be passed
        gender={gender} 
        edu={edu} 
        preview={preview}
         removeHandler={()=>{
             setPreview(false)
             setFirstName("")
             setGender("")
             setEdu("")}}/>

<div><h3><a href="/">Go to Homepage</a></h3></div>
        </div>
    )
}

export default Formhandling