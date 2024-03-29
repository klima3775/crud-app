import EmployeesListItem from "./EmployeeListItem/EmployeeListItem";
import "./employeeList.css";

const EmployeeList = () => {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem />
      <EmployeesListItem />
      <EmployeesListItem />
    </ul>
  );
};
export default EmployeeList;
