import React ,{useState} from "react"
import "./Giphy.css"
const Giphy_Api="https://api.giphy.com/v1/gifs/search?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&limit=36&q="


function Giphy(){
const [headerMsg,setHeaderMsg]=useState("Search")
const [search,setSearch]=useState("")
const [gifs,setGifs]=useState([])
const [loading,setLoading]=useState(false)


function searchGifs(){
    if(search.length>0){
        setLoading(true)
        setHeaderMsg("Loading")
        fetch(Giphy_Api+search)
        .then((res)=>{
            setLoading(false)
            return res.json();
        })
        .then((results)=>{
        setGifs(results.data.map((gif)=>{return gif.images.fixed_height.url}))
        })
        setHeaderMsg(`Results - ${search}`)
        .catch((err)=>{
            setLoading(false)
            alert("unable to get gifs please try again or after some time")
        })
    }
}


    return (
        <div>
            <header className="header"><h1>{headerMsg}</h1></header>
            <div className="maincontainer">


            <div className="innerBox" >
                
                    <div className="searchBox">
                    
                    <input placeholder="Article name or keywords"
                         value={search}
                        onChange={(e)=>{setSearch(e.target.value)}}
                    />
                    <button onClick={searchGifs}>Search</button>
                    </div>

                    
                    <div className="imagecontainer">
                        {
                            gifs.map((gif)=>{
                                return(
                                    <div className="displayitem">
                                        <img src={gif}/>
                
                                    </div>
                                )
                            })
                        }
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Giphy