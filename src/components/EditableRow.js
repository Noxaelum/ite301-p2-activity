import React from "react";

const EditableRow = ({
  handleCancelClick,
  name,
  email,
  age,
  designation,
  setname,
  setemail,
  setage,
  setdesignation,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required
          value={name}
          placeholder="Enter name"
          onChange={(e) => setname(e.target.value)}
        />
      </td>
      <td>
        <input
          type="email"
          required
          value={email}
          placeholder="Enter email"
          onChange={(e) => setemail(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          required
          value={age}
          placeholder="Enter age"
          onChange={(e) => setage(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          required
          value={designation}
          placeholder="Enter designation"
          onChange={(e) => setdesignation(e.target.value)}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
