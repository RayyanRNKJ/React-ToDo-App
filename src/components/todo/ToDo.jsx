import React from "react";
import "./ToDo.css";

function ToDo({ todo }) {
  return (
    <div className="todo">
      <input type="checkbox" />
      <h5>{todo.value}</h5>
      <div className="todo-btn-container">
        <button className="todo-edit-btn">Edit</button>
        <button className="todo-del-btn">Delete</button>
      </div>
    </div>
  );
}

export default ToDo;
