import React from "react";
import "./ToDoList.css";
import ToDo from "../todo/ToDo";
import uuid from "react-uuid";

function ToDoList() {
  return (
    <div className="todo-list">
      <ToDo />
    </div>
  );
}

export default ToDoList;
