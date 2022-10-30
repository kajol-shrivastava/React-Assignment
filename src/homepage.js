import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
const Homepage=()=>{
return(<div>
<h1 style={{textAlign:"center" ,color:"teal"}}>Welcome</h1>
<p style={{textalign:"center"}}>Name : Kajol Shrivastava<br/>Roll No :   fn-rad-74CYY</p>
<br/>
<p>=================================================================================================</p>

{/* <previewResults/> */}
<div><h3><a href="/">Go to Homepage</a></h3></div>

{/* Link does not reload */}
<div><h3><Link to="/formhandling">Assignment 1-formhandling </Link></h3></div>
<div><h3><a href="/student">Assignment 2-JSON data handling Assignment</a></h3></div>
<div><h3><Link to="apifetch">Assignment 3-Fetch data from API</Link></h3></div>
<div><h3><Link to="/statedemo">Practice of StateDemo with class Component</Link></h3></div>
</div>)
}

export default Homepage