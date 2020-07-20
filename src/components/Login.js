import React from "react";
import api from "../services/api";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        username: "",
        password: "",
      },
    };
  }

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    api.auth
      .login(this.state.fields.username, this.state.fields.password)
      .then((res) => {
        if (res.error) {
          this.setState({ error: true });
        } else {
          this.props.handleLogin(res);
          this.props.history.push("/");
        }
      });
  };

  render() {
    const { fields } = this.state;

    return (
      <div className="body">
        <p>Login</p>
        {this.state.error ? <h1>Try Again</h1> : null}
        <div className=" form">
          <form onSubmit={this.handleSubmit}>
            <div className=" field">
              <label>Username: </label>
              <input
                name="username"
                placeholder="username"
                value={fields.username}
                onChange={this.handleChange}
              />
              <br></br>
            </div>
            <div className=" field">
              <label>Password: </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                value={fields.password}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
