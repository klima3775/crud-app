// import "./searchPanel.css";
// import { Component } from "react";
// import { debounce } from "lodash";

// class SearchPanel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       term: "",
//     };
//     this.debouncedSearch = debounce(this.props.onUpdateSearch, 300);
//   }

//   oneSearchPanel = (e) => {
//     const term = e.target.value.replace(/\s+/g, "");
//     this.setState({ term });
//     this.debouncedSearch(term);
//   };

//   render() {
//     return (
//       <input
//         type="text"
//         className="form-control search-input"
//         placeholder="Пошук по працівникам"
//         value={this.state.term}
//         onChange={this.oneSearchPanel}
//       />
//     );
//   }
// }
// export default SearchPanel;
import React, { useState, useEffect } from "react";
import "./searchPanel.css";
import { debounce } from "lodash";

const SearchPanel = ({ onUpdateSearch }) => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    const debouncedSearch = debounce(onUpdateSearch, 300);
    return () => {
      debouncedSearch.cancel();
    };
  }, [onUpdateSearch]);

  const handleSearch = (e) => {
    const newTerm = e.target.value.replace(/\s+/g, "");
    setTerm(newTerm);
    onUpdateSearch(newTerm);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Пошук по працівникам"
      value={term}
      onChange={handleSearch}
    />
  );
};

export default SearchPanel;
