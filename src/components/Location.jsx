import React, { Component } from 'react';

class Location extends Component {
    render() {
        return (
          <div className="location">
            <h1 className="locationCity">{this.props.dataLoc.region}, {this.props.dataLoc.country}</h1>
            <img className="icon" src={this.props.condition.icon} alt="Icon" />
            
          </div>
        );
    }
}

export default Location;