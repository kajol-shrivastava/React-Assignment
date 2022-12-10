import React from "react"
import {Link}  from "react-router-dom"
import "./Home.css"

function Home(props) {
    return (
      <div  className="maincontainer" >
      
       <div className="headercontainer" >
       <header><h1>Giphy DEMO</h1></header>
       

         
      
      <br/>
      <br/>

      <br/>
      <h2>{props.name?  `WELCOME  -  ${props.name}`   :    "Login Please"}</h2>
      <br/>
      <br/>
      <h1>
              <Link to="/login">Login</Link>
          </h1>
          
          <h1>
              <Link to="/signup">SignUp</Link>
          </h1>
          </div>
      </div>
    );
  }
  
  export default Home;