import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "../header/Header";
import AddItemInput from "../additeminput/AddItemInput";
import ToDoList from "../todolist/ToDoList";
import EditSection from "../editsection/EditSection";
import uuid from "react-uuid";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [doEditItem, setDoEditItem] = useState("");
  const [doEditItemValue, setDoEditItemValue] = useState("");

  useEffect(() => {
    if (localStorage.getItem("list") === null) {
      localStorage.setItem("list", JSON.stringify(todoList));
    } else if (
      todoList.length === 0 &&
      JSON.parse(localStorage.getItem("list")).length > 0
    ) {
      setTodoList(JSON.parse(localStorage.getItem("list")));
    }

    if (todoList.length > 0) {
      localStorage.setItem("list", JSON.stringify(todoList));
    }
  }, [todoList]);

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
    const elementIndex = list.findIndex((element) => element.id === id);
    const updatedList = list.filter((item) => item.id !== id);
    const localStorageList = JSON.parse(localStorage.getItem("list"));

    localStorageList.splice(elementIndex, 1);
    localStorage.setItem("list", JSON.stringify(localStorageList));

    setTodoList(updatedList);
  };

  const findEditItem = (id) => {
    const list = [...todoList];
    const elementIndex = list.findIndex((element) => element.id === id);

    setDoEditItem(list[elementIndex]);
    setDoEditItemValue(list[elementIndex].value);
  };

  const handleEditItemValueChange = (value) => {
    setDoEditItemValue(value);
  };

  const editItem = (id, value) => {
    const list = [...todoList];
    let elementIndex = list.findIndex((element) => element.id === id);

    list[elementIndex] = { ...list[elementIndex], value: value };

    setTodoList(list);
  };

  const handleEditButtonClick = () => {
    setDoEditItem("");
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
        findEditItem={findEditItem}
      />
      <EditSection
        doEditItem={doEditItem}
        doEditItemValue={doEditItemValue}
        editItemValueChange={handleEditItemValueChange}
        editItem={editItem}
        editButtonClick={handleEditButtonClick}
      />
    </div>
  );
}

export default App;
