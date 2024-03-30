import "./App.css";
import AppInfo from "./components/employees-info/info";
import SearchPanel from "./components/search-panel/searchPanel";
import Filter from "./components/employees-filter/filterEmployee";
import EmployeeList from "./components/employes-list/employeeList";
import EmployersAddForm from "./components/employees-add-form/employeeAddForm";

function App() {
  const data = [
    { name: "Олег Б.", salary: 800, increase: false },
    { name: "Іван Д.", salary: 1000, increase: true },
    { name: "Сергей С.", salary: 3000, increase: true },
  ];

  return (
    <div className="App">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <Filter />
      </div>
      <EmployeeList data={data} />
      <EmployersAddForm />
    </div>
  );
}

export default App;
