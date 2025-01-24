import React,{useState}from "react";
import Child from "./Child";

const Methodparent =(passing)=>{
  const[parent,child]= useState("Siri")

    passing=()=>{
        child("mani")
    }
    return(
        <div>
            <h1>hi {parent}</h1>
            <Child exporting={passing.parent}/>
        </div>
    )
}

export default Methodparent;








