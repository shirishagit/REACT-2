import React, { Component } from "react";
import UpdatedComponent from "./Original";

class IncrementOne extends Component{
    constructor(){
        super()
        this.state ={
            count :0
        }
    }
    increaseCount=()=>{
        this.setState(prevState=>{
            return{count:prevState.count +1}
        })
    }
    render(){
        const {count} = this.state
        return (
            <div>
                <button onClick={this.increaseCount}>{this.props.name}clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(IncrementOne);