import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import api from "../services/api";

class Userform extends Component {
  state = {
    value: " ",
  };

  componentDidMount() {
    this.setState({
      value: this.props.bio,
    });
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.value);
    api.auth.patchCurrentUser(this.state.value);
    this.props.renderBio(this.state.value);
    this.props.toggle();
  };

  render() {
    return (
      <div>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-multiline-static"
            label="Bio"
            multiline
            rows={4}
            value={this.state.value}
            variant="filled"
            onChange={this.handleChange}
          />{" "}
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Userform;
