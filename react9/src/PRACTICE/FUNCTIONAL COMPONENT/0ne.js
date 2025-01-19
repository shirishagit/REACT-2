import react from "react";

const One = props =>{
    console.log(props)
    return(
        <div>
           <h1>Functional compounent {props.name}  { props.used}</h1>
        </div>
       
    )
}

export default One;