import { Component } from "react";

import "./addForm.css";

class EmployersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.salary);

    const newEmployer = { name: this.state.name, salary: this.state.salary };
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newEmployer);
    localStorage.setItem("users", JSON.stringify(users));

    this.setState({
      name: "",
      salary: "",
    });
  };

  render() {
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Як його звати?"
            name="name"
            value={this.state.name}
            onChange={this.onValueChange}
            required
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={this.state.salary}
            onChange={this.onValueChange}
            required
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}
export default EmployersAddForm;
