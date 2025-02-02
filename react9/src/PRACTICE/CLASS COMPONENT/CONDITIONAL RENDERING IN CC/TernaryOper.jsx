import React,{Component} from "react";

class TernaryOper extends Component{
    constructor(){
        super()
        this.state ={
            message : true
        }
    }
    render(){
        return this.state.message ?
        (<div>Log In please</div>):(<div>Welcome</div>)
    }
}

export default TernaryOper;