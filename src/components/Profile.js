import React, { Component } from "react";

class Profile extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.props.history.push("/login");
    }
  }
  render() {
    return <div className="body">Profile</div>;
  }
}

export default Profile;
