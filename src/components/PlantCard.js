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
    alert(`${props.p.common_name} has been add to your Plant Vault`);
  };
  return (
    <div className="plantCard">
      <div>
        <img
          className="plantSearchImage"
          alt="picture unavailable "
          src={props.p.image_url}
        />
      </div>
      <br></br>
      <div>
        <h5>Common Name:</h5> {props.p.common_name}
      </div>

      <div>
        <h5>Scientific Name: </h5> {props.p.scientific_name}
      </div>
      <br></br>

      <button className="addPlantButton" onClick={handlePlantClick}>
        Add Me
      </button>
    </div>
  );
}
