import React, { useState } from "react";

const Setstate =()=>{
    const[count,firstNumber]=useState(0)
   
    return(
        <div>Count = {count}<br/>
        <button onClick={()=>firstNumber(count +1)}>increase</button>
        <button onClick={()=>firstNumber(count -1)}>decrease</button>
        </div>
       
    )
}

export default Setstate;