import "./searchPanel.css";
import { Component } from "react";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  oneSearchPanel = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
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
