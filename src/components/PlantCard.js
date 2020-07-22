import React from "react";
import api from "../services/api";

export default function PlantCard(props) {
  const handlePlantClick = () => {
    const postBody = {
      commonname: props.p.common_name,
      scientificname: props.p.scientific_name,
      img_url: props.p.image_url,
    };

    api.plants.postPlants(postBody);
  };
  return (
    <div>
      <div className="image">
        <img alt="picture unavailable " src={props.p.image_url} />
      </div>
      <div className="content">
        <div className="header">{props.p.common_name}</div>
      </div>
      <div className="extra content">
        <span>{props.p.scientific_name}</span>
      </div>
      <button onClick={handlePlantClick}>Add Me</button>
    </div>
  );
}
