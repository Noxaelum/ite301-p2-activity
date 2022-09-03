import React from "react";

const NewEmployeeForm = ({
  handleCloseFormClick,
  handleSubmit,
  name,
  email,
  age,
  designation,
  setName,
  setEmail,
  setAge,
  setDesignation,
}) => {
  return (
    <div>
      <button className="button-emp" onClick={handleCloseFormClick}>
        Close Form
      </button>
      <h2>Add a New Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          required
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Age</label>
        <input
          type="text"
          required
          value={age}
          placeholder="Enter age"
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <label>Designation</label>
        <input
          type="text"
          required
          value={designation}
          placeholder="Enter designation"
          onChange={(e) => setDesignation(e.target.value)}
        ></input>
        <button>Add Employee</button>
      </form>
    </div>
  );
};

export default NewEmployeeForm;
