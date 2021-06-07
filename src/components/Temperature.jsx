import React, { Component } from "react";

class Temperature extends Component {

  render() {
    return (
      <div className="temperature">
        <h1 className="tempDegree">
          {this.props.dataTemp.temp_f}&deg; <span>F</span>
        </h1>
        <h3 className="tempDescrip">{this.props.condition.text}</h3>
      </div>
    );
  }
}

export default Temperature;
