import React, { Component } from "react";
import api from "../services/api";
import Toggle from "./Toggle";
import Plantform from "./Plantform";
import Container from "@material-ui/core/Container";

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
    console.log(this.state.id);
    const id = this.state.id;
    api.plants.deletePlant(id);
    this.props.renderFilteredPlants(id);
  };
  render() {
    return (
      <div className="plantCard">
        <div className="content">
          <button
            className="plantDeleteButton"
            onClick={this.handleDeletePlantClick}
          >
            Remove Plant
          </button>
          <br></br>
          <br></br>

          <img className="plantImage" src={this.props.img} />
          <br></br>
          <div>
            <h5>Common Name:</h5> {this.props.commonname}
          </div>
        </div>
        <div>
          <h5>Scientific Name: </h5> {this.props.scientificname}
        </div>
        <br></br>

        <Toggle>
          {({ on, toggle }) => (
            <div>
              <button className="plantNoteButton" onClick={toggle}>
                Take Note
              </button>
              <div>
                <span>{this.state.plantNote}</span>
              </div>
              {on && (
                <Plantform
                  toggle={toggle}
                  renderPlantNote={this.renderPlantNote}
                  id={this.state.id}
                  note={this.state.plantNote}
                  on={on}
                />
              )}
            </div>
          )}
        </Toggle>
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
