import React from "react";
import "./ToDo.css";

function ToDo({ todo, checkBoxChange, deleteItem, findEditItem }) {
  return (
    <div className="todo">
      <div className="todo-input-h5">
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => checkBoxChange(todo.id)}
        />
        <h5>{todo.value}</h5>
      </div>
      <div className="todo-btn-container">
        <button className="todo-edit-btn" onClick={() => findEditItem(todo.id)}>
          Edit
        </button>
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
