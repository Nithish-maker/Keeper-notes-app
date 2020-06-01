import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Maincontent from "./Maincontent";

import Notes from "./Notes";


function App() {

    const [notes,setNotes] = useState([]);

    function addNotes(newNotes) {
                setNotes(prevNotes => {
                    return [...prevNotes,newNotes];
                });
    }
    return (
        <div>
            <Navbar />
            <Sidebar />
            <Maincontent  
            onAdd={addNotes}
            />
           {notes.map(noteItem => {
                return <Notes 
                        title={noteItem.title}
                        content={noteItem.content}
                       />
            })}

        </div>
    );
}

export default App;