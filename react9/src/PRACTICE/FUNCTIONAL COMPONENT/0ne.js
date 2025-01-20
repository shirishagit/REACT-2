import react, { use, useState } from "react";

const One = () =>{
  const[data,update] =useState("shirisha")
    function dataUpdate(){
        update("9sai")
    }
    return(
       <div>
        <h1>The data will change on the click on the button this is call changing the state of functional compounent <br/>
         Here is the name which will change on the click :-{data}</h1>
        <button onClick={dataUpdate}>click it</button>
        </div>
    )
  
}
    
export default One;