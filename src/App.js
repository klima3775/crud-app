import { Component } from "react";

import "./App.css";
import AppInfo from "./components/employees-info/info";
import SearchPanel from "./components/search-panel/searchPanel";
import Filter from "./components/employees-filter/filterEmployee";
import EmployeeList from "./components/employes-list/employeeList";
import EmployersAddForm from "./components/employees-add-form/employeeAddForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.newId = 4;
  }

  componentDidMount() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    this.setState({
      data: users,
    });
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after];

      localStorage.setItem("users", JSON.stringify(newArr));
      return {
        data: newArr,
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name: name.trim(),
      salary: salary.trim(),
      increase: false,
      id: this.newId++,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <Filter />
        </div>
        <EmployeeList data={this.state.data} onDelete={this.deleteItem} />
        <EmployersAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
