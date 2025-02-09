import React,{Component} from "react";

class Refs extends Component{
    constructor(){
        super()
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setRef = element =>{
            this.cbRef = element
        }
    }
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
    }

    // componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    // }
    render(){
        return(
            <div>
                {/* <label>Username</label> */}
                {/* <input ref={this.inputRef}/> */}
                <label>id</label>
                <input type="text"  ref={this.setRef}/>
            </div>
        )
    }

    }
 


export default Refs;