import React from "react";
import "./EditSection.css";

function EditSection() {
  return (
    <div className="edit-section">
      <div className="backdrop"></div>
      <div className="content">
        <input type="text" className="edit-input" placeholder="Edit The ToDo" />
        <div className="btn-container">
          <button className="edit-btn">Edit</button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditSection;
