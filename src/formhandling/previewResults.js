const PreviewResults=({firstname,gender,edu, preview,removeHandler})=>{
    
    return(
        <div>
        {
            preview&&<div  style={{border:"5px black dotted" ,background:"teal" ,textAlign:"center"}}>
            <h2 >Entered Details</h2>
            <h3>Firstname  :  {firstname}  <br/>
        Gender  :  {gender}<br/>
        Education:{edu}</h3>

        <button type="reset" onClick={()=>{removeHandler()}}>Reset values</button>
            </div>
        }
     
        
        </div>
    )
}

export default PreviewResults