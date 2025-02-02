import React, {Component} from "react";
//YOU CAN UES 1.ARROW FUNCTION OR 
// 2.BIND(THIS) IN THE RENDER MENTHOD
// 3.BIND IN CONSTRUCTOR


class Increment extends Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    increaseNum(){
        this.setState({
            count : this.state.count + 1
        })
    }
       render(){
        return(
            <div>
                <h2>count:- {this.state.count}</h2>
                {/* <button onClick={()=>this.increaseNum()}>Increase</button> */}
                <button onClick={this.increaseNum.bind(this)}>Increase</button>
            </div>
        )
    }
}


export default Increment;