import React, { Component } from "react";
import Noteform from "./Noteform";
import Toggle from "./Toggle";
import api from "../services/api";
export class Noteinfo extends Component {
  state = {
    note: "",
  };
  componentDidMount() {
    this.setState({
      note: this.props.note,
    });
  }
  renderNote = (value) => {
    this.setState({
      note: value,
    });
  };
  handleCanvasDelete = (e) => {
    api.canvas.deleteCanvas(e.target.id);
    this.props.renderFilteredCanvas(this.props.id);
  };
  render() {
    return (
      <div>
        <br></br>
        <button id={this.props.id} onClick={this.handleCanvasDelete}>
          Delete This Design
        </button>
        <img src={this.props.img} />
        <p>{this.state.note}</p>
        <Toggle>
          {({ on, toggle }) => (
            <div>
              <button onClick={toggle}>Make a Note</button>
              {on && (
                <Noteform
                  renderNote={this.renderNote}
                  on={on}
                  id={this.props.id}
                  note={this.props.note}
                />
              )}
            </div>
          )}
        </Toggle>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Noteinfo;
