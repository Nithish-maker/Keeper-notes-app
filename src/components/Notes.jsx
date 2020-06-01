import React from "react";

function Notes(props) {
  return (
    <div className="main-content reduce-size">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button>DELETE</button>
    </div>
  );
}

export default Notes;
