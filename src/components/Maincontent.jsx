import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

function Maincontent(props) {

    const [isExpanded,setExpanded] = useState(false);

    const [note,setNote] = useState([{
        title : "",
        content : ""
    }]);


    function handleInput(event) {
             const {name,value} = event.target;

             setNote(prevNote =>{
                 return {
                     ...prevNote,
                     [name]: value                 
                    };
             });
            }
    function submitEvent(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
          });
        event.preventDefault();


    } 
    function expand() {
        setExpanded(true);
    }
            //setNote("");

             return(
                <div className="main-content">
                    <form>
                        {isExpanded ? 
                        <input 
                        type="text" 
                        onChange={handleInput} 
                        value={note.title} 
                        placeholder="Title"  
                        /> : null } 
                        <textarea 
                        type="text" 
                        onChange={handleInput} 
                        onClick={expand}
                        value={note.content} 
                        placeholder="Take Notes Here...."  
                        row={isExpanded ? 3: 1}></textarea>
                        
                        <Fab onClick={submitEvent}>
                            <AddIcon />
                        </Fab>

                     </form>
                </div>
             );
        
}

export default Maincontent;