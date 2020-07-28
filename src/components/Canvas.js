import React, { Component } from "react";
import Paint from "./Paint";
import Toggle from "./Toggle";

export class Canvas extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div className="body">
        <h1>Design Your Garden!</h1>
        <Toggle>
          {({ on, toggle }) => (
            <div>
              <button onClick={toggle}>Design</button>
              {on && <Paint on={on} />}
            </div>
          )}
        </Toggle>
      </div>
    );
  }
}

export default Canvas;
