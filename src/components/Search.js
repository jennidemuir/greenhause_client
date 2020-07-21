import React, { Component } from "react";

class Search extends Component {
  state = {
    value: " ",
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search Plants</label>
          <input
            onChange={this.handleChange}
            placeholder="search plants"
            value={this.state.value}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Search;
