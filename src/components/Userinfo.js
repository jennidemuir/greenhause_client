import React, { Component } from "react";
import api from "../services/api";
import Toggle from "./Toggle";
import Userform from "./Userform";

export class Userinfo extends Component {
  state = {
    username: "",
    bio: "",
    avatar: "",
  };
  componentDidMount() {
    api.auth.getUserInfo().then(
      (data) => (
        console.log(data),
        this.setState({
          username: data.user.username,
          bio: data.user.bio,
        })
      )
    );
  }
  renderBio = (value) => {
    this.setState({
      bio: value,
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.username}'s Profile</h1>
        <p>{this.state.bio}</p>

        <Toggle>
          {({ on, toggle }) => (
            <div>
              <button onClick={toggle}>Edit Bio</button>
              {on && <Userform renderBio={this.renderBio} on={on} />}
            </div>
          )}
        </Toggle>
      </div>
    );
  }
}

export default Userinfo;
