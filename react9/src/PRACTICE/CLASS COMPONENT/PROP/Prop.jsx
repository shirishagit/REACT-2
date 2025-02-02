import React, {Component} from "react";
//IN CLASS COMPOUNT WE NEED TO USE THIS .PROPS TO ACCESS THE PROP

class Prop extends Component{
    render(){
        return(
            <div>
                <h1>Welcome {this.props.name} and {this.props.channel}</h1>
            </div>
        )
    }
}

export default Prop;