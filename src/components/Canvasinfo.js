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
      <div className="canvasCard">
        <br></br>
        <button
          className="canvasDeleteButton"
          id={this.props.id}
          onClick={this.handleCanvasDelete}
        >
          Delete This Design
        </button>
        <img className="canvasImage" src={this.props.img} />

        <Toggle>
          {({ on, toggle }) => (
            <div>
              <button className="canvasNoteButton" onClick={toggle}>
                Design Notes
              </button>
              <p>{this.state.note}</p>
              {on && (
                <Noteform
                  toggle={toggle}
                  renderNote={this.renderNote}
                  on={on}
                  id={this.props.id}
                  note={this.state.note}
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
