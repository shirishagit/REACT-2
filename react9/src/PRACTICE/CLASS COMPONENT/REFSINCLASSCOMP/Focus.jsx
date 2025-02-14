import React,{Component} from "react";
import Refinclass from "./Refinclass";

class FocuseInClass extends Component{
    constructor(props){
        super(props)
        this.compountRef = React.createRef()
    }
    clickHandler=()=>{
        this.compountRef.current.focusInput()
    }
    render(){
        return(
            <div>
                <Refinclass ref={this.compountRef}/>
                <button onClick={this.clickHandler}>focuse Button</button>
            </div>
        )
    }
}

export default FocuseInClass;