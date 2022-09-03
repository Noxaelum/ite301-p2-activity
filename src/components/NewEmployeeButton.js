import React from "react";

const NewEmployeeButton = ({ handleOpenFormClick }) => {
  return (
    <div>
      <button className="button-emp" onClick={handleOpenFormClick}>
        Add Employee
      </button>
    </div>
  );
};

export default NewEmployeeButton;
