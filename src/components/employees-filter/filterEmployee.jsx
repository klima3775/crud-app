import "./filterEmployee.css";

const Filter = (props) => {
  const buttonsData = [
    { name: "all", label: "Всі Працівники" },
    { name: "rise", label: "На підвищення" },
    { name: "moreThen1000", label: "З/П більше 1000$" },
  ];
  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        key={name}
        onClick={() => props.onFilterSelect(name)}
        className={`btn ${clazz}`}
      >
        {label}
      </button>
    );
  });
  return <div className="btn-group">{buttons}</div>;
};
export default Filter;
