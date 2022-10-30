import studentlist from "./student.json"
const student=()=>{
    return (
        <div>
            <div><h3><a href="/">Go to Homepage</a></h3></div>
                <h1  
                style={{
                textAlign:"center",
                    color:"darkBeige",
                    background:"brown"
                }}
                >StudentList</h1>
                {
                    
                    
                studentlist.map((item,index)=>(
                     <ul style={{background:"yellow"}}>
                            <li>id  :  {item.id}</li>
                            <li>name:   {item.name}</li>
                            <li>movie:   {item.movie}</li>
                        </ul>
            
                ))
            
                
                
                }
           
        </div>
    )
}


export default student