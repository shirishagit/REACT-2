import React from "react";


const MethodChild=(props)=>{
     return(
        <div>
            <button onClick={props.passingToChild}>click</button>
            {/* <h1>{props.passingToChild}</h1> */}
        </div>
     )
}

export default MethodChild;