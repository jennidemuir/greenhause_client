import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import api from "../services/api";

class Userform extends Component {
  state = {
    value: " ",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.value);
    api.auth.postCurrentUser(this.state.value);
  };

  render() {
    return (
      <div>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <label>
            Bio:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Userform;
