import React, { Component } from "react";
import api from "../services/api";

export class Noteform extends Component {
  state = {
    value: "",
  };

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
  };

  render() {
    return (
      <div>
        <br></br>
        <form id={this.props.id} onSubmit={this.handleSubmit}>
          <label>
            Take Note:
            <input
              placeholder={this.props.note}
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

export default Noteform;
