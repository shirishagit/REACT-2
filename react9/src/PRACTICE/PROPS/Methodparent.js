import React, {useState}from "react";
import child from "./child";

function Methodparent(){
    // const [parent,childEle]= useState("parent")
    // function pass(){
    //     childEle("child")
    // }
      useState ={
        parent :"hello"
      }
    return(
        <div>
            <child exporting={parent}/>
        </div>
    )
}

export default Methodparent;