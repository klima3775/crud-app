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
      term: "",
    };
    this.newId = 1;
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
      rise: false,
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
      localStorage.setItem("users", JSON.stringify(newArr));
      return {
        data: newArr,
      };
    });
  };
  searchEmploees = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };
  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  render() {
    const { data, term } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.searchEmploees(data, term);
    return (
      <div className="App">
        <AppInfo employees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <Filter />
        </div>
        <EmployeeList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployersAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
