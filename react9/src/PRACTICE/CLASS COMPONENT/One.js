import React, {Component} from "react";

class One extends Component{
    render(){
        return(
            <div>
                <p>This is a class component {this.props.name} {this.props.used}</p>
            </div>
        )
    }
}

export default One;