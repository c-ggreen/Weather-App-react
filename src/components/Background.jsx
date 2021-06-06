import React, { Component } from 'react';

class Background extends Component {
    render() {
        return (
          <div>
            <video
              className="landing-page-video"
              src="https://storage.coverr.co/videos/STGCDNDz2bG1wn01N22Z3JHauO931im1t?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjIxMzQxNzU2fQ.ivjRk6kGOVuEJ89HsOivee137m82HDRqeg2qKPCj4Xo"
              autoPlay
              loop
              muted
            />
          </div>
        );
    }
}

export default Background;