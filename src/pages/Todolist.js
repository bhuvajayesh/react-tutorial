import React from "react";

const ToDoLists = (props) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        X
      </button>
      <li>{props.text}</li>
    </div>
  );
};

export default ToDoLists;
