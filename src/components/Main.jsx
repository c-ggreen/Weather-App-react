import React, { Component } from "react";
import Background from "./Background";
import Location from "./Location";
import Temperature from "./Temperature";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      longitude: "",
      latitude: "",
    };
  }

  // Responsible for getting the coordinates of the user.
  getCoords = () => {
    console.log("getCoords function is firing");

    // Using geolocation to get access to user coords
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Setting the state of the lat and long to the users specific positioning
        this.setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });

        // Checking that the values are present
        console.log(this.state.longitude);
        console.log(this.state.latitude);
      });
    } else {
      alert("Error: Unknown location.");
    }
  };

  getInfo = async(event) =>{

    const long = this.state.longitude
    const lat = this.state.latitude
    const key = "1dcc93701d97ab7a939ecbe7c139bc60";

    const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`

    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
    }catch(err){
        console.log(err);
    }
  }

  componentDidMount() {
    this.getCoords();
    this.getInfo()
  }

  render() {
    return (
      <div>
        <Background />
        <div id="containerAll">
          <Location
            longitude={this.state.longitude}
            latitude={this.state.latitude}
          />
          <Temperature
            longitude={this.state.longitude}
            latitude={this.state.latitude}
          />
          <p className="copywrite"> Chadwick Green &copy;</p>
        </div>
      </div>
    );
  }
}

export default Main;
