import { React, useState, useEffect, Fragment } from "react";
import axios from "axios";
import "./App.css";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import NewEmployeeForm from "./components/NewEmployeeForm";
import NewEmployeeButton from "./components/NewEmployeeButton";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1/php-rest-api-v2/api/read.php")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const column = [
    { heading: "name" },
    { heading: "email" },
    { heading: "age" },
    { heading: "designation" },
    { heading: "actions" },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [designation, setDesignation] = useState("");

  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://127.0.0.1/php-rest-api-v2/api/create.php",
        {
          name: name,
          email: email,
          age: age,
          designation: designation,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://127.0.0.1/php-rest-api-v2/api/update.php",
        {
          id: editId,
          name: name,
          email: email,
          age: age,
          designation: designation,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleEditClick = (e, data) => {
    e.preventDefault();
    setEditId(data.id);
    setName(data.name);
    setEmail(data.email);
    setAge(data.age);
    setDesignation(data.designation);
  };

  const handleCancelClick = () => {
    setEditId(null);
  };

  const handleDeleteClick = (e, data) => {
    e.preventDefault();
    axios
      .post(
        "http://127.0.0.1/php-rest-api-v2/api/delete.php",
        {
          id: String(data.id),
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [open, setOpenForm] = useState(false);

  const handleOpenFormClick = (e) => {
    e.preventDefault();
    setOpenForm(true);
    console.log(
      "Hello sir or to whoever is reading this. If you're going to debug, mapapansin niyong yung form ko with create is the same with update in CRUD. Kasi they're both using the same state kaya ganun. Kaya I made this band-aid solution of hiding the create form para when you edit, hindi mo makikita yung nangyayari sa create form. Hehe"
    );
  };

  const handleCloseFormClick = (e) => {
    e.preventDefault();
    setOpenForm(false);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditSubmit}>
        <table>
          <thead>
            <tr>
              {column.map((column, index) => (
                <th>{column.heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <Fragment>
                {editId === data.id ? (
                  <EditableRow
                    handleCancelClick={handleCancelClick}
                    name={name}
                    email={email}
                    age={age}
                    designation={designation}
                    setname={setName}
                    setemail={setEmail}
                    setage={setAge}
                    setdesignation={setDesignation}
                  />
                ) : (
                  <ReadOnlyRow
                    data={data}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      {open === true ? (
        <NewEmployeeForm
          handleCloseFormClick={handleCloseFormClick}
          handleSubmit={handleSubmit}
          name={name}
          email={email}
          age={age}
          designation={designation}
          setName={setName}
          setEmail={setEmail}
          setAge={setAge}
          setDesignation={setDesignation}
        />
      ) : (
        <NewEmployeeButton handleOpenFormClick={handleOpenFormClick} />
      )}
    </div>
  );
};

export default App;
