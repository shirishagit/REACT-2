import React from "react";


const Child=(props)=>{
    return(
        <div>child Element <br/>
             <button onClick={()=> props.exporting}>click</button>
        </div>
       
    )
}

export default Child;