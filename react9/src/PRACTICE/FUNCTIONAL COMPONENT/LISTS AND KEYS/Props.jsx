import React from "react";
import PropsChild from "./PropsChild";



const Lists =()=>{
     const arrList = [
        {
            rollNumber : "01",
            studentName : "shirisha",
            studing : "b.a"
        },
        {
            rollNumber : "02",
            studentName : "anjali",
            studing : "b.a"
        },
        {
            rollNumber : "03",
            studentName : "revathi",
            studing : "b.com"
        }
     ]
     const studentList = arrList.map((student,index) =>(<PropsChild  key ={index} student={student}/>))
     return(
        <div>{studentList}
        
        </div>

     )
}

export default Lists;