import React from "react";
import "./Style.css"

//THIS IS CSS STYLESHEET IN THIS METHOD WE SIMPLE DO STYLING AS FOR 
// NORMAL IMOPRTING CSS STYLESHEET  AS ID OR CLASS
//THERE WE HAVE ALSO USED STYLING THE ELEMENT AS THEY CAN ALSO PASED AS PROPS

const Styling =(props)=>{
    let className = props.primary ? "design" : ""
    return(
        <div  className ={`${className} one`}>Here is the Styling to the Element through Normal style sheet</div>
    )
}

export default Styling;
