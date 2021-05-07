import React, { useState } from "react";
import "./App.css";
import Header from "../header/Header";
import AddItemInput from "../additeminput/AddItemInput";
import ToDoList from "../todolist/ToDoList";
import EditSection from "../editsection/EditSection";
import uuid from "react-uuid";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (inputValue) => {
    setNewItem(inputValue);
  };

  const addItem = () => {
    if (newItem !== "") {
      const addNewItem = {
        id: uuid(),
        value: newItem,
        isDone: false,
      };

      const list = [...todoList];
      list.unshift(addNewItem);

      setTodoList(list);
      setNewItem("");
    }
  };

  const handleCheckBoxChange = (id) => {
    const list = [...todoList];
    let elementIndex = list.findIndex((element) => element.id === id);

    list[elementIndex] = {
      ...list[elementIndex],
      isDone: !list[elementIndex].isDone,
    };

    setTodoList(list);
  };

  const deleteItem = (id) => {
    const list = [...todoList];
    const updatedList = list.filter((item) => item.id !== id);

    setTodoList(updatedList);
  };

  return (
    <div className="app">
      <Header />
      <AddItemInput
        newItem={newItem}
        inputChange={handleInputChange}
        addItem={addItem}
      />
      <ToDoList
        todoList={todoList}
        checkBoxChange={handleCheckBoxChange}
        deleteItem={deleteItem}
      />
      <EditSection />
    </div>
  );
}

export default App;
