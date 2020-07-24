import React, { Component } from "react";
import Painterro from "painterro";
import Profile from "./Profile";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import api from "../services/api";

const paint = Painterro({
  saveHandler: function (image, done) {
    // console.log("dataurl", image.asDataURL(), "done", done),

    // const formData = new FormData();
    // console.log(image.asDataURL());
    // formData.append("image", image.asBlob());
    api.canvas.postCanvas(image.asDataURL());
    // you can also pass suggested filename
    // formData.append('image', image.asBlob(), image.suggestedFileName());
    // const xhr = new XMLHttpRequest();
    // xhr.open("POST", "http://localhost:5000/api/v1/canvas", true);
    // xhr.onload = xhr.onerror = function () {
    //   done(true);
    // };
    // xhr.send(formData);
  },
  onClose: function () {
    window.location.href = "/design";

    //     return console.log("hi");
  },

  colorScheme: {
    main: "#fdf6b8", // make panels light-yellow
    control: "#FECF67", // change controls color
  },
});

class Paint extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.props.history.push("/login");
    }
  }
  render() {
    return <div> {paint.show()}</div>;
  }
}

export default Paint;
