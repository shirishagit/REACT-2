import react, { useState } from "react";

const Setstate =()=>{
    const[count,firstNumber]=useState(0)
   
    return(
        <div>Count = {count}<br/>
        <button onClick={()=>firstNumber(count +1)}>increase</button>
        </div>
       
    )
}

export default Setstate;