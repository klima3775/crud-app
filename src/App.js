import "./App.css";
import AppInfo from "./components/employees-info/info";
import SearchPanel from "./components/search-panel/searchPanel";
import Filter from "./components/employees-filter/filterEmployee";
import EmployeeList from "./components/employes-list/employeeList";
import EmployersAddForm from "./components/employees-add-form/employeeAddForm";

function App() {
  return (
    <div className="App">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <Filter />
      </div>
      <EmployeeList />
      <EmployersAddForm />
    </div>
  );
}

export default App;
