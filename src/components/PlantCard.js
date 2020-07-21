import React from "react";

export default function PlantCard(props) {
  return (
    <div>
      <div className="image">
        <img alt="oh no!" src={props.p.image_url} />
      </div>
      <div className="content">
        <div className="header">{props.p.common_name}</div>
      </div>
      <div className="extra content">
        <span>{props.p.scientific_name}</span>
      </div>
      <button>Add Me</button>
    </div>
  );
}
