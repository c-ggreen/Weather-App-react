import React, { Component } from 'react';
import Location from './Location';
import Temperature from './Temperature';


class Main extends Component {
    render() {
        return (
          <div id="containerAll">
            
            <Location/>

            <Temperature/>
              <p class="copywrite"> Chadwick Green &copy;</p>
            
          </div>
        );
    }
}

export default Main;