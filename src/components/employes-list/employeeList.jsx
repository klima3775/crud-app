import "./employeeList.css";
import EmployeesListItem from "../employees-list-item/employeeListItem";

const EmployeeList = ({ data }) => {
  const elements = data.map((item) => {
    return <EmployeesListItem {...item} />;
  });

  return <ul className="app-list list-group">{elements}</ul>;
};
export default EmployeeList;
