import React, { Component } from "react";
import api from "../services/api";
import { TextField } from "@material-ui/core";

export class Noteform extends Component {
  state = {
    value: "",
  };

  componentDidMount() {
    this.setState({
      value: this.props.note,
    });
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    api.canvas.editCanvasNote(this.state.value, e.target.id);
    this.props.renderNote(this.state.value);
    this.props.toggle();
  };

  render() {
    return (
      <div>
        <br></br>
        <form id={this.props.id} onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-multiline-static"
            label="Take Note"
            multiline
            rows={4}
            value={this.state.value}
            variant="outlined"
            onChange={this.handleChange}
          />
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Noteform;
