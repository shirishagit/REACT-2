import React from "react";

const InlineStyling =()=>{
    const style ={
        fontSize :"50px",
        color :"blue",
        padding : "30px"
    }
    return(
        <div>
            <p style={style}> This is a in line Style which are direct and strught forward.<br/>This is a stright forward Styling</p>
        </div>
    )
}

export default InlineStyling;