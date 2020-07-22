import React, { Component } from "react";
import api from "../services/api";
import PlantProfileCard from "./PlantProfileCard";
import Plants from "./Plants";
import Userinfo from "./Userinfo";

class Profile extends Component {
  state = {
    plants: [],
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.props.history.push("/login");
    }

    api.plants.getPlants().then((plantdata) =>
      this.setState({
        plants: plantdata,
      })
    );
  }

  renderFilteredPlants = (plantId) => {
    const filterPlants = this.state.plants.filter((p) => p.id !== plantId);
    this.setState({
      plants: filterPlants,
    });
  };
  render() {
    return (
      <div className="body">
        <br></br>
        <Userinfo />
        <br></br>
        {this.state.plants.map((p) => {
          return (
            <PlantProfileCard
              renderFilteredPlants={this.renderFilteredPlants}
              key={p.id}
              p={p}
            />
          );
        })}
      </div>
    );
  }
}

export default Profile;
