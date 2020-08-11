import React, { Component } from "react";
import api from "../services/api";
import PlantCard from "./PlantCard";
import Search from "./Search";
import PlantProfileCard from "./PlantProfileCard";
import Toggle from "./Toggle";

class Plants extends Component {
  state = {
    plants: [],
    plantVault: [],
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.props.history.push("/login");
    }

    api.plants.getPlants().then(
      (plantdata) => (
        console.log(plantdata),
        this.setState({
          plantsVault: plantdata,
        })
      )
    );
  }

  handleSearch = (searchValue) => {
    return api.plants.searchPlants(searchValue).then((resp) => {
      this.setState({
        plants: resp.data,
      });
    });
  };

  render() {
    return (
      <div className="body" id="plantPage">
        <h1 id="plantHeader">🌼Find A Plant🌼</h1>
        <br></br>
        <Search handleSearch={this.handleSearch} />
        <br></br>
        {this.state.plants.map((p) => {
          return <PlantCard key={p.id} p={p} />;
        })}
      </div>
    );
  }
}

export default Plants;
