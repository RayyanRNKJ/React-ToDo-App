import React from "react";
import "./EditSection.css";

function EditSection({
  doEditItem,
  doEditItemValue,
  editItemValueChange,
  editItem,
  editButtonClick,
}) {
  return (
    <div className={`edit-section ${doEditItem ? `active` : ``}`}>
      <div className="backdrop"></div>
      <div className="content">
        <input
          type="text"
          className="edit-input"
          placeholder="Edit The ToDo"
          value={doEditItemValue}
          onChange={(event) => editItemValueChange(event.target.value)}
        />
        <div className="btn-container">
          <button
            className="edit-btn"
            onClick={() => {
              editItem(doEditItem.id, doEditItemValue);
              editButtonClick();
            }}
          >
            Edit
          </button>
          <button
            className="cancel-btn"
            onClick={() => {
              editButtonClick();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditSection;
