import React from "react";
import bell1 from "./bell1.png"
import bell2 from "./bell2.png"

export class StateDemo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            message:"Subscribe to my Channel",
            sub:"Subscribe",
            bellMsg:"Please Click bell icon bellow to get all the notification",
            imageUrl:bell2
        }
    }
    styles={
        
        
        fontStyle:"italic",
        color:"purple"

    }
    changeMsg=()=>{
        this.setState({
            message:"thanks for subscribe",
            sub:"subscribed"
        })}

        changeImg=()=>{
            this.setState({imageUrl:bell1,
            bellMsg:"you will get notified"})
        }
   
    
    render(){
        return(
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button  onClick={this.changeMsg} style={{align:"center"}}>{this.state.sub}</button>
                <p>{this.state.bellMsg}</p>
                <img 
                onClick={this.changeImg}
                style={{height:"30px",width:"30px"}}
                src={this.state.imageUrl}

                />
                <div><h3><a href="/">Go to Homepage</a></h3></div>
            </div>
        );
    }
}