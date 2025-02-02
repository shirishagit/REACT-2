import React,{Component} from "react";

class ShortCircuit extends Component{
    constructor(){
        super()
        this.state ={
            displayMessage : true
        }
    }
    render(){
        return this.state.displayMessage && <div><h1><i>Login Sucessfully</i></h1></div>
    }
}

export default ShortCircuit;