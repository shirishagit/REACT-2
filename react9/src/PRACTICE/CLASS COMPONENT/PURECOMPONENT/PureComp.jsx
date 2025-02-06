import React,{PureComponent} from "react";

class PUREComponent extends PureComponent{
      render(){
         return(
            <div>
                <p>pure Component{this.props.person}</p>
            </div>
        )
    }
}

export default PUREComponent;