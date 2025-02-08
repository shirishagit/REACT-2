import React,{Component} from "react";

class Refs extends Component{
    constructor(){
        super()
    }
    onfocseHandler(){
    
    }
    render(){
        return(
            <div>
                <label>Username</label>
                <input ref={this.onfocseHandler}/>
            </div>
        )
    }
}

export default Refs;