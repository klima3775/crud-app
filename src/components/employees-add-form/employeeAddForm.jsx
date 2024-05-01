// import { Component } from "react";
import { useState } from "react";
import "./addForm.css";
const EmployersAddForm = (props) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  const onValueChange = (e) => {
    const value = e.target.value;
    if (e.target.name === "name") {
      setName(value);
    } else if (e.target.name === "salary") {
      setSalary(value);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    props.onAdd(name, salary);
    const newEmployer = {
      name,
      salary,
    };
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newEmployer);
    localStorage.setItem("users", JSON.stringify(users));

    setName("");
    setSalary("");
  };
  return (
    <div className="app-add-form">
      <h3>Додайте нового працівника </h3>
      <form className="add-form d-flex" onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Як його звати?"
          name="name"
          value={name}
          onChange={onValueChange}
          required
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
          name="salary"
          value={salary}
          onChange={onValueChange}
          required
        />

        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployersAddForm;
