import { useState } from "react"
const dogsListAPI = "https://dog.ceo/api/breeds/list/all";


const Dogs=()=>{
    const [breeds,setBreeds]=useState([])
    const[currBreed,setCurrBreed]=useState("")
    const [image,setImage]=useState()

     const getBreedsList=()=>{
         fetch(dogsListAPI).then((res)=>{
             return res.json()
         }).then((data)=>{
             setBreeds(Object.keys(data.message))
             console.log(Object.keys(data.message))
         })
      
     }
return(<div>
<div><h3><a href="/">Go to Homepage</a></h3></div>
<h1 style={{textAlign:"center", background:"magenta"}}>KNOW YOUR DOG</h1>
    <div
     style={{
        margin: "100px",
        background: "beige",
        padding: "30px",
        textAlign:"center"
      }}>
    
        <button onClick={()=>getBreedsList()}>Click to get list of dog breeds</button>
<div>
       <ul style={{ width: "40%", display: "inline-block" }}>
       {
            breeds.map((breed,index)=>(
        
                <li key={index}
                              style={{
                padding: "10px",
                borderBottom: "1px solid #444",
                fontSize: "18px",
              }}
                onClick={()=>{
                    setCurrBreed(breed)
                setImage(undefined);
                fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
                  .then((response) => response.json())
                  .then((data) => {
                    console.log("data -- ", data);
                    setImage(data.message);
                  });
                }}>
                {breed}</li>
            
            ))
        }
       </ul>

       <div
          style={{
            width: "40%",
            display: "inline-block",
            verticalAlign: "top",
            padding: "20px",
          }}
        >
          <h2> Breed Image - {currBreed.toUpperCase()} </h2>
          {image && (
            <img
              onClick={() => {
                setImage(undefined);
                fetch(`https://dog.ceo/api/breed/${currBreed}/images/random`)
                  .then((response) => response.json())
                  .then((data) => {
                    console.log("data -- ", data);
                    setImage(data.message);
                  });
              }}
              style={{ width: "100%" }}
              src={image}
              alt="dog "
            />
          )}
        </div>
      </div>
    </div>
    </div>
)
}

export default Dogs