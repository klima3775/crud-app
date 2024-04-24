import React, { useState, useEffect } from "react";

import "./App.css";
import AppInfo from "./components/employees-info/info";
import SearchPanel from "./components/search-panel/searchPanel";
import Filter from "./components/employees-filter/filterEmployee";
import EmployeeList from "./components/employes-list/employeeList";
import EmployersAddForm from "./components/employees-add-form/employeeAddForm";

const App = () => {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    setData(users);
  }, []);

  const deleteItem = (id) => {
    const index = data.findIndex((elem) => elem.id === id);
    const before = data.slice(0, index);
    const after = data.slice(index + 1);
    const newArr = [...before, ...after];

    localStorage.setItem("users", JSON.stringify(newArr));
    setData(newArr);
  };

  const addItem = (name, salary) => {
    const newItem = {
      name: name.trim(),
      salary: salary.trim(),
      increase: false,
      rise: false,
      id: Date.now(),
    };

    const newArr = [...data, newItem];
    setData(newArr);
  };

  const onToggleProp = (id, prop) => {
    const index = data.findIndex((elem) => elem.id === id);
    const old = data[index];
    const newItem = { ...old, [prop]: !old[prop] };
    const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    localStorage.setItem("users", JSON.stringify(newArr));
    setData(newArr);
  };

  const searchEmployees = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  const onUpdateSearch = (term) => {
    setTerm(term);
  };

  const filterEmployees = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);
      case "moreThen1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  const onFilterSelect = (filter) => {
    setFilter(filter);
  };

  const employees = data.length;
  const increased = data.filter((item) => item.increase).length;
  const visibleData = filterEmployees(searchEmployees(data, term), filter);

  return (
    <div className="App">
      <AppInfo employees={employees} increased={increased} />
      <div className="search-panel">
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <Filter filter={filter} onFilterSelect={onFilterSelect} />
      </div>
      <EmployeeList
        data={visibleData}
        onDelete={deleteItem}
        onToggleProp={onToggleProp}
      />
      <EmployersAddForm onAdd={addItem} />
    </div>
  );
};

export default App;
