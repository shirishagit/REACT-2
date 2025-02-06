import React,{Component} from "react";
// import PUREComponent from "./PureComp";
import MemoComp from "../../FUNCTIONAL COMPONENT/MEMO/MemoComp";

class RegularComponent extends Component{
    constructor(props){
        super(props)
        this.state={
         person:"nine Sai"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                person:"nine sai"
            })
        },3000)
    }
    render(){
        // console.log("siri")
        return(
            <div>
                {/* <h1>{this.state.person}</h1> */}
                {/* <PUREComponent/> */}
                <MemoComp passing={this.state.person}/>
            </div>
        )
    }
}

export default RegularComponent;