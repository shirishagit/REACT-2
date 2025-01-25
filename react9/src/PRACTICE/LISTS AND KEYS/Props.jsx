import React from "react";

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
     const studentList = arrList.map(student =>(
     <h1>My self {student.studentName} i am studing in {student.studing}</h1>))
     return(
        <div>{studentList}</div>
     )
}

export default Lists;