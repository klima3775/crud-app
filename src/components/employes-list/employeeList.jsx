import "./employeeList.css";
import EmployeesListItem from "../employees-list-item/employeeListItem";

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
