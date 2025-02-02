import React,{Component} from "react";
import MethodChild from "./MethodChild";

class MethodParent extends Component{
    constructor(){
        super()
        this.state ={
            display :"This is a method"
        }
        
    }
    onclickHandeler(){
       alert(`${this.state.display}`)
    }

    render(){
        return(
          <div>
            <MethodChild passingToChild={()=>this.onclickHandeler()}/>
          </div>
      )
  }
}

export default MethodParent;
