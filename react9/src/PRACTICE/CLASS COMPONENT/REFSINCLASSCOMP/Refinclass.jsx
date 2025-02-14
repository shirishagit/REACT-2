import React,{Component} from "react";

class Refinclass extends Component{
    constructor(props){
        super(props)
        this.ClassRef = React.createRef()
    }
    focusInput(){
        this.ClassRef.current.focus()
    }
    render(){
        return(
            <div>
                <input typeof="text" ref={this.ClassRef}/>
            </div>
        )
    }
}

export default Refinclass;