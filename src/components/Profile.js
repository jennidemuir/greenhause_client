import React, { Component } from "react";
import api from "../services/api";
import PlantProfileCard from "./PlantProfileCard";
import Plants from "./Plants";
import Userinfo from "./Userinfo";
import Toggle from "./Toggle";
import Noteform from "./Noteform";
import Canvasinfo from "./Canvasinfo";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

class Profile extends Component {
  state = {
    plants: [],
    canvas: [],
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
    api.canvas.getCanvas().then(
      (data) => (
        console.log(data),
        this.setState({
          canvas: data,
        })
      )
    );
  }
  renderFilteredCanvas = (canvasId) => {
    const filterCanvas = this.state.canvas.filter((c) => c.id !== canvasId);
    this.setState({
      canvas: filterCanvas,
    });
  };

  renderFilteredPlants = (plantId) => {
    const filterPlants = this.state.plants.filter(
      (p) => p.plantcard.id !== plantId
    );
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
              commonname={p.commonname}
              scientificname={p.scientificname}
              id={p.id}
            />
          );
        })}
        {this.state.canvas.map((c) => {
          return (
            <Canvasinfo
              renderFilteredCanvas={this.renderFilteredCanvas}
              key={c.id}
              img={c.image}
              note={c.canvas_notes}
              id={c.id}
            />
            // <div>
            //   <img src={c.image} />
            //   <p>{c.canvas_notes}</p>
            //   <Toggle>
            //     {({ on, toggle }) => (
            //       <div>
            //         <button onClick={toggle}>Make a Note</button>
            //         {on && <Noteform on={on} id={c.id} />}
            //       </div>
            //     )}
            //   </Toggle>
            // </div>
          );
        })}
      </div>
    );
  }
}

export default Profile;
