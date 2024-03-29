import "./App.css";
import AppInfo from "./components/Info/info";
import SearchPanel from "./components/searchPanel/searchPanel";
import Filter from "./components/Filter/filterEmployee";

function App() {
  return (
    <div className="App">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <Filter />
      </div>
    </div>
  );
}

export default App;
