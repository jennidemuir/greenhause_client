import React, { Component } from "react";
import api from "../services/api";

class Signup extends Component {
  state = {
    username: "",
    password: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.addNewUser(this.state);
    this.setState({
      username: "",
      password: "",
    });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewUser = (newuser) => {
    fetch("http://localhost:5000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: newuser }),
    });
  };

  render() {
    return (
      <div className="body">
        <p>Sign Up</p>
        <div className=" form">
          <form
            onSubmit={(e) => {
              this.handleSubmit(e);
            }}
          >
            <div className="field">
              <label>Username: </label>
              <input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="username"
              />
              <br></br>
              <label>Password: </label>
              <input
                value={this.state.password}
                onChange={this.handleInputChange}
                type="password"
                name="password"
                placeholder="password"
              />
            </div>
            <input className="submit" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
