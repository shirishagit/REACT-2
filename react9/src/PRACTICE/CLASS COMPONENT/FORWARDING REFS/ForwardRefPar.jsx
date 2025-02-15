import React,{Component} from "react";
import ForwardRefChild from "./ForwardRefChild";

class ForwardRefPar extends Component{
    constructor(props){
        super(props)
        this.ForwardRefParent = React.createRef()
    }
    onClickHandler =()=>{
        this.ForwardRefParent.current.focus()
    }
    render(){
        return(
            <div>
                <ForwardRefChild ref={this.ForwardRefParent}/>
                <button onClick={this.onClickHandler}>Click to focuse</button>
            </div>
        )
    }
}

export default ForwardRefPar;