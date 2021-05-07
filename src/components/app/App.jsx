import React, { useState } from "react";
import "./App.css";
import Header from "../header/Header";
import AddItemInput from "../additeminput/AddItemInput";
import ToDoList from "../todolist/ToDoList";
import EditSection from "../editsection/EditSection";
import uuid from "react-uuid";

function App() {
  return (
    <div className="app">
      <Header />
      <AddItemInput />
      <ToDoList />
      <EditSection />
    </div>
  );
}

export default App;
