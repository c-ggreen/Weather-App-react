import React, { Component } from 'react';

class Background extends Component {
    render() {
        return (
          <div>
            <video
              className="landing-page-video"
              src="https://player.vimeo.com/external/488511938.sd.mp4?s=9d921919030285f55fe039e566410a5e867844af&profile_id=139&oauth2_token_id=57447761"
              autoPlay
              loop
              muted
            />
          </div>
        );
    }
}

export default Background;