import React,{Component} from "react";

class IfElse extends Component{
    constructor(){
        super()
        this.state={
            logIn : false
        }
    }
    render(){
        if (this.state.logIn){
           return <div>
                <h1>Lets explore the World</h1>
            </div>
        }else{
        return    <div>
                <p>Please Login Before You Explore</p>
            </div>
        }
    }
}

export default IfElse;