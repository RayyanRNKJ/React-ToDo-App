import React from "react";
import "./ToDo.css";

function ToDo({ todo, checkBoxChange, deleteItem }) {
  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => checkBoxChange(todo.id)}
      />
      <h5>{todo.value}</h5>
      <div className="todo-btn-container">
        <button className="todo-edit-btn">Edit</button>
        <button
          className="todo-del-btn"
          onClick={() => {
            if (window.confirm("Delete This ToDo")) {
              deleteItem(todo.id);
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDo;
