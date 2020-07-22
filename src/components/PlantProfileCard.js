import React from "react";
import api from "../services/api";

export default function PlantCard(props) {
  const handleDeletePlantClick = () => {
    const id = props.p.id;
    api.plants.deletePlant(id);
    props.renderFilteredPlants(props.p.id);
  };
  return (
    <div>
      {/* <div className="image">
        <img alt="picture unavailable " src={props.p.image_url} />
      </div> */}

      <div className="content">
        <div className="header">Common Name: {props.p.commonname}</div>
      </div>
      <div className="extra content">
        <span>Scientific Name: {props.p.scientificname}</span>
      </div>
      <button onClick={handleDeletePlantClick}>Delete Me</button>
    </div>
  );
}
