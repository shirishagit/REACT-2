import React,{useState} from "react";

const Operator = () =>{
    useState={
        loggedIn: false
    }
if(useState.loggedIn){
    return(
        <div>yes</div>
    )
}else{
    return(
        <div>no</div>
    )
}
}
export default Operator;