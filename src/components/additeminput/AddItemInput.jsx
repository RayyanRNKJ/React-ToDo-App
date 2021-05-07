import React from "react";
import "./AddItemInput.css";

function InputForm() {
  return (
    <div className="input-form">
      <input
        type="text"
        className="add-item-input"
        placeholder="Write A ToDo"
        required
      />
      <button className="add-item-btn">Add Item</button>
    </div>
  );
}

export default InputForm;
