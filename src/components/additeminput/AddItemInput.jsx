import React from "react";
import "./AddItemInput.css";

function InputForm({ newItem, inputChange, addItem }) {
  return (
    <div className="input-form">
      <input
        type="text"
        className="add-item-input"
        placeholder="Write A ToDo"
        required
        value={newItem}
        onChange={(event) => inputChange(event.target.value)}
      />
      <button className="add-item-btn" onClick={() => addItem()}>
        Add Item
      </button>
    </div>
  );
}

export default InputForm;
