import React from "react";


function child(props ){
    return(
        <div>child Element <br/>
             <button onClick={()=> props.exporting}>click</button>
        </div>
       
    )
}

export default child;