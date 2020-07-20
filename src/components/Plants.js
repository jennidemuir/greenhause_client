import React, { Component } from "react";

class Plants extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.props.history.push("/login");
    }
  }
  render() {
    return <div className="body">Plants</div>;
  }
}

export default Plants;
