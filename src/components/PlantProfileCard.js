import React, { Component } from "react";
import api from "../services/api";
import Toggle from "./Toggle";
import Plantform from "./Plantform";

class PlantProfileCard extends Component {
  state = {
    plantNote: "",
    id: "",
  };
  componentDidMount() {
    api.plants.getPlantNotes(this.props.id).then((obj) =>
      this.setState({
        plantNote: obj.plantnote,
        id: obj.id,
      })
    );
  }
  renderPlantNote = (value) => {
    this.setState({
      plantNote: value,
    });
  };

  handleDeletePlantClick = () => {
    const id = this.props.p.id;
    api.plants.deletePlant(id);
    this.props.renderFilteredPlants(this.props.p.id);
  };
  render() {
    return (
      <div>
        <div className="content">
          <div className="header">Common Name: {this.props.commonname}</div>
        </div>
        <div className="extra content">
          <span>Scientific Name: {this.props.scientificname}</span>
        </div>
        <div>
          <span> Note: {this.state.plantNote}</span>
        </div>

        <Toggle>
          {({ on, toggle }) => (
            <div>
              <button onClick={toggle}>Make a Note</button>
              {on && (
                <Plantform
                  renderPlantNote={this.renderPlantNote}
                  id={this.state.id}
                  note={this.state.plantNote}
                  on={on}
                />
              )}
            </div>
          )}
        </Toggle>
        <button onClick={this.handleDeletePlantClick}>Delete Me</button>
      </div>
    );
  }
}

export default PlantProfileCard;

// export default function PlantCard(props) {

//   componentDidMount(){
//     api.plants.getPlants().then(obj => console.log(obj))
//   }

//   const handleDeletePlantClick = () => {
//     const id = props.p.id;
//     api.plants.deletePlant(id);
//     props.renderFilteredPlants(props.p.id);
//   };

//   return (
//     <div>
//       <div className="content">
//         <div className="header">Common Name: {props.p.commonname}</div>
//       </div>
//       <div className="extra content">
//         <span>Scientific Name: {props.p.scientificname}</span>
//       </div>

//       <Toggle>
//         {({ on, toggle }) => (
//           <div>
//             <button onClick={toggle}>Make a Note</button>
//             {on && <Plantform on={on} />}
//           </div>
//         )}
//       </Toggle>
//       <button onClick={handleDeletePlantClick}>Delete Me</button>
//     </div>
//   );
// }
