import React, { useState } from "react";


const FormHandling = () =>{
       const[username,onchange] = useState("")
       const[feedback,next] = useState("")
       const[select,Options] = useState("")

     function onChangeUserName(event){
           onchange(event.target.value)
     }
     function onChangeFeedBack(event){
        next(event.target.value)
     }
     function onChangeSelect(event){
        Options(event.target.value)
     }
     function Submmit(){
        console.log(`${username} ${feedback} ${select}`)
        Event.preventDefault();
     }
       return (
       <form  onSubmit={Submmit}>
         <div>
             <label>Username</label>
             <input type="text"  value={username}  onChange={onChangeUserName} required/>
         </div>
         <div>
            <label>Feedback</label>
            <textarea type="text" value={feedback} onChange={onChangeFeedBack} required></textarea>
         </div>
         <div>
            <label>Select</label>
            <select value={select} onChange={onChangeSelect}>
                <option>C pro</option>
                <option>C ++</option>
                <option>Java</option>
                <option>Phyaton</option>
            </select>
         </div>
         <div>
            <button type="submit">submit</button>
         </div>
       </form>
    )
}

export default FormHandling;