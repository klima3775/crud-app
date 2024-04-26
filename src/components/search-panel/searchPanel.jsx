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
