import React, { Component } from 'react';

class Temperature extends Component {
    render() {
        return (
          <div class="temperature">
            <h1 class="tempDegree">
              60&deg; <span>F</span>
            </h1>
            <h3 class="tempDescrip">Description</h3>
          </div>
        );
    }
}

export default Temperature;