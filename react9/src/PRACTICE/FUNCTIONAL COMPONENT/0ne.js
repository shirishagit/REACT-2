import react, { use, useState } from "react";

const One = () =>{
  const[data,update] =useState("shirisha")
    function dataUpdate(){
        update("sai")
    }
    return(
       <div>
        <h1>{data}</h1>
        <button onClick={dataUpdate}>click it</button>
        
       </div>
    )
  
}
    
export default One;