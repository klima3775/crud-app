import "./searchPanel.css";
import { Component } from "react";
import { debounce } from "lodash";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    this.debouncedSearch = debounce(this.props.onUpdateSearch, 300);
  }

  oneSearchPanel = (e) => {
    const term = e.target.value.replace(/\s+/g, "");
    this.setState({ term });
    this.debouncedSearch(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Пошук по працівникам"
        value={this.state.term}
        onChange={this.oneSearchPanel}
      />
    );
  }
}
export default SearchPanel;
