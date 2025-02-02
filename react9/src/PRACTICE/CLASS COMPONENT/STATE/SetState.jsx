import React,{Component} from "react";

class SetState extends Component{
     constructor(){
     super()
        this.state ={
            message:"lets start"
        }
     }
     changeMessage(){
        this.setState({
           message :"come on lets explore"
        })
      }

    render(){
        return(
        <div>
            <h1>Welcome <br/>"{this.state.message}"</h1>
            <button onClick={()=>this.changeMessage()}>explore</button>
        </div>
        )
    }
}

export default SetState;