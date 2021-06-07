import React, { Component } from "react";
import Background from "./Background";
import Location from "./Location";
import Temperature from "./Temperature";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: "",
      latitude: "",
      dataTemp: "",
      dataLoc: "",
      condition: ""
    };
  }

  componentDidMount() {
    // Getting the geolocation of the user
    navigator.geolocation.getCurrentPosition((position) => {

      // Setting the latitude and longitude to variables
      let long = position.coords.longitude;
      let lat = position.coords.latitude;

      console.log(long);
      console.log(lat);

      // API key
      const key = "ff34acb70a704aeb94b03010210706";

      // API url
      const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${lat},${long}&aqi=no`;
      
      // API Request
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            dataTemp: data.current,
            dataLoc: data.location,
            condition: data.current.condition,
          });
        });

      this.setState({
        longitude: long,
        latitude: lat,
      });
    })
  }

  render() {
    return (
      <div>
        <Background />
        <div id="containerAll">
          <Location
            longitude={this.state.longitude}
            latitude={this.state.latitude}
            dataTemp={this.state.dataTemp}
            dataLoc={this.state.dataLoc}
            condition={this.state.condition}
          />
          <Temperature
            longitude={this.state.longitude}
            latitude={this.state.latitude}
            dataTemp={this.state.dataTemp}
            dataLoc={this.state.dataLoc}
            condition={this.state.condition}
          />
          <p className="copywrite"> Chadwick Green &copy;</p>
        </div>
      </div>
    );
  }
}

export default Main;
