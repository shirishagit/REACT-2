import React, {Component} from "react";
//destructuring props and ststes here we will menstion them first and then write then in function

class One extends Component{
    render(){
        const{name,used} = this.props
        return(
            <div>
                <p>This is a class component {name} {used}</p>
            </div>
        )
    }
}

export default One;