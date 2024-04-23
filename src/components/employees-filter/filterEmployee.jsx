import "./filterEmployee.css";

const Filter = (props) => {
  const buttonsData = [
    { name: "all", label: "Всі Працівники" },
    { name: "rise", label: "На підвищення" },
    { name: "moreThen1000", label: "З/П більше 1000$", colored: true },
  ];
  const buttons = buttonsData.map(({ name, label, colored }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    const style = colored ? { color: "red" } : null;
    return (
      <button
        key={name}
        onClick={() => props.onFilterSelect(name)}
        className={`btn ${clazz}`}
        style={style}
      >
        {label}
      </button>
    );
  });
  return <div className="btn-group">{buttons}</div>;
};
export default Filter;
