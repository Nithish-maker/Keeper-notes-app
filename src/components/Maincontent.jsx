import React, { useState } from "react";


function Maincontent(props) {

    const [note,setNote] = useState([{
        title : "",
        content : ""
    }]);


    function handleInput(event) {
             const {name,value} = event.target;

             setNote(prevNote =>{
                 return {
                     ...prevNote,
                     [name]:value
                 };
             });
            }
    function submitEvent(event) {
        props.onAdd(note);
        event.preventDefault();


    } 
            //setNote("");

             return(
                <div className="main-content">
                    <form>
                        <input type="text" onChange={handleInput} value={note.title} placeholder="Title"  />
                        <textarea type="text" onChange={handleInput} value={note.content} placeholder="Take Notes Here...."  row="3"></textarea>
                        <button onClick={submitEvent}>Add</button>
                     </form>
                </div>
             );
        
}

export default Maincontent;