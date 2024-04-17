import "./info.css";

const AppInfo = (props) => {
  const { increased, employees } = props;
  return (
    <div className="app-info">
      <h1>Працівники компанії</h1>
      <h2>Загальна кількість працівників {employees}</h2>
      <h2>Премію отримають {increased} </h2>
    </div>
  );
};

export default AppInfo;
