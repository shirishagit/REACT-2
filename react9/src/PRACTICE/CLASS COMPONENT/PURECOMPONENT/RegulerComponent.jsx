import React,{Component, PureComponent} from "react";
import PUREComponent from "./PureComp";

class RegularComponent extends Component{
    constructor(props){
        super(props)
        this.state={
         person:"nine Sai"
        }
    }
    shouldComponentUpdate(){
        setInterval(()=>{
            this.setState({
                person:"nine sai"
            })
        },5000)
    }
    render(){
        
        return(
            <div>
                <h1>{this.state.person}</h1>
                <PUREComponent/>
            </div>
        )
    }
}

export default RegularComponent;