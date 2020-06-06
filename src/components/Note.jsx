import React from "react";
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
function Note(props) {
  return (
    <div className="main-content reduce-size">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab className="butt">
        <DeleteIcon />
      </Fab>
    </div>
  );
}

export default Note;
