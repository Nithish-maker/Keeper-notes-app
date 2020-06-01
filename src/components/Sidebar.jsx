import React from "react";

function Sidebar() {
    return (
        <div>
            <div className="sidebar">
                <a href="#Notes"><i className="fas fa-lightbulb"></i><span>Notes</span></a>
                <a href="#Remainder"><i className="fas fa-bell"></i><span>Remainder</span></a>
                <a href="#Trash"><i className="fas fa-trash-alt"></i><span>Trash</span></a>
                <a href="#Edit"><i className="fas fa-edit"></i><span>Edit</span></a>
                <a href="#Edit"><i className="fas fa-window-close"></i><span>Exit</span></a> 
            </div>
        </div>
    );
}

export default Sidebar;