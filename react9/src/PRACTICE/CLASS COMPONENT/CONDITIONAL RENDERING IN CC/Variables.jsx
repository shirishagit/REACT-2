import React,{Component} from "react";

class Variables extends Component{
    constructor(){
        super()
        this.state ={
            loggedIn : true
        }
    }
    render(){
        let IsLoggedIn 
        if(this.state.loggedIn){
            IsLoggedIn = <h2>welcome</h2>
        }else{
            IsLoggedIn = <p>Please login</p>
        }
      return <div>{IsLoggedIn}</div> 
    }
}
export default Variables;