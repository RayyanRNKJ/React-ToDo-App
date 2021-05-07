import React from "react";
import "./ToDoList.css";
import ToDo from "../todo/ToDo";
import uuid from "react-uuid";

function ToDoList({ todoList, checkBoxChange, deleteItem }) {
  const todoLists = todoList.map((todo) => {
    return (
      <ToDo
        key={uuid()}
        todo={todo}
        checkBoxChange={checkBoxChange}
        deleteItem={deleteItem}
      />
    );
  });
  return <div className="todo-list">{todoLists}</div>;
}

export default ToDoList;
