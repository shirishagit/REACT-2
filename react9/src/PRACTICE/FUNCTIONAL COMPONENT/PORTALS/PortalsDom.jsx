import React from "react";
import ReactDom from "react-dom";

const model = document.getElementById("Portal-root") 

const PortalsDom = ()=>{
    return ReactDom.createPortal(
    <h1>Portals Dom</h1>, model
    )
}

export default PortalsDom;