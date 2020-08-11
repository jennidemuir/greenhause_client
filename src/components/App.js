import "../App.css";
import React, { Component } from "react";
import api from "../services/api";
import Signup from "./Signup";
import Login from "./Login";
import Canvas from "./Canvas";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Plants from "./Plants";
import Profile from "./Profile";

class App extends Component {
  state = { auth: { currentUser: {} } };

  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token) {
      api.auth.getCurrentUser().then((user) => {
        const currentUser = { currentUser: user };

        this.setState({ auth: currentUser });
      });
    }
  }

  handleLogin = (user) => {
    const currentUser = { currentUser: user };
    localStorage.setItem("token", user.token);

    this.setState({ auth: currentUser });
  };

  handleLogout = () => {
    localStorage.clear();
    this.setState({ auth: { currentUser: {} } });
  };

  getPlants = () => {
    api.plants.getPlants.then((res) => console.log(res));
  };
  render() {
    return (
      <div className="appDiv">
        <Navbar
          title="GreenHause"
          currentUser={this.state.auth.currentUser}
          handleLogout={this.handleLogout}
        />
        <div id="content" className="container">
          <Switch>
            <Route
              path="/login"
              render={(routerProps) => {
                return (
                  <Login {...routerProps} handleLogin={this.handleLogin} />
                );
              }}
            />
            <Route path="/Signup" component={Signup} />
            <Route path="/plants" component={Plants} />
            <Route path="/design" component={Canvas} />
            {/* <Route path="/" component={Profile} /> */}

            <Route
              path="/design"
              render={() => {
                const loggedIn = !!this.state.auth.currentUser.id;

                return loggedIn ? <Canvas /> : <Redirect to="/login" />;
              }}
            />
            <Route
              path="/plants"
              render={() => {
                const loggedIn = !!this.state.auth.currentUser.id;

                return loggedIn ? <Plants /> : <Redirect to="/login" />;
              }}
            />
            <Route
              path="/"
              render={() => {
                const loggedIn = !!this.state.auth.currentUser.id;

                return loggedIn ? <Profile /> : <Redirect to="/login" />;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
