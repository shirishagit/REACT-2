import React from "react";

function PropsChild({student}){
    return(
        <h1>  My self {student.studentName} i am studing in {student.studing}</h1>
        
    )
}

export default PropsChild;