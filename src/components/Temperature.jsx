import React, { Component } from "react";

class Temperature extends Component {
  render() {
    return (
      <div className="temperature">
        <h1 className="tempDegree">
          60&deg; <span>F</span>
        </h1>
        <h3 className="tempDescrip">Description</h3>
      </div>
    );
  }
}

export default Temperature;
