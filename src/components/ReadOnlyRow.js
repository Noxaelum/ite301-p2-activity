import React from "react";

const ReadOnlyRow = ({ data, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.age}</td>
      <td>{data.designation}</td>
      <td>
        <button type="button" onClick={(e) => handleEditClick(e, data)}>
          Edit
        </button>
        <button type="button" onClick={(e) => handleDeleteClick(e, data)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
