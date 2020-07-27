import React, { Component } from "react";
import api from "../services/api";
import { TextField } from "@material-ui/core";

export class Plantform extends Component {
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
    console.log("target", e.target.id, "value", this.state.value);
    api.plants.patchPlantNote(this.state.value, e.target.id);
    this.props.renderPlantNote(this.state.value);
  };
  render() {
    return (
      <div>
        <br></br>
        <form id={this.props.id} onSubmit={this.handleSubmit}>
          <br></br>
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
        <br></br>
      </div>
    );
  }
}

export default Plantform;
