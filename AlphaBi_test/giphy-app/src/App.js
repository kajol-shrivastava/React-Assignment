import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { useState,useEffect } from "react"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp"
import Giphy from "./components/Giphy/Giphy"
import {auth} from "./firebase"
// import './App.css'

function App() {
const [userName,setUserName]=useState("")
useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    if(user){
     setUserName(user.displayName)
    }
    else{
      setUserName("")
    }
  })
},[userName])
  return (
    <div >
     <Router>
       <Routes>
         <Route path="/" element={<Home name={userName}/>}/>
         <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/giphy" element={<Giphy/>}/>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
