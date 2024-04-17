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
  onToggleProp = (id, prop) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      const newItem = { ...old, [prop]: !old[prop] };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return {
        data: newArr,
      };
    });
  };
  // onToggleRise = (id) => {
  //   this.setState(({ data }) => {
  //     const index = data.findIndex((elem) => elem.id === id);
  //     const old = data[index];
  //     const newItem = { ...old, rise: !old.rise };
  //     const newArr = [
  //       ...data.slice(0, index),
  //       newItem,
  //       ...data.slice(index + 1),
  //     ];
  //     return {
  //       data: newArr,
  //     };
  //   });
  // };

  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    return (
      <div className="App">
        <AppInfo employees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel />
          <Filter />
        </div>
        <EmployeeList
          data={this.state.data}
          onDelete={this.deleteItem}
          // onToggleIncrease={this.onToggleIncrease}
          // onToggleRise={this.onToggleRise}
          onToggleProp={this.onToggleProp}
        />
        <EmployersAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
