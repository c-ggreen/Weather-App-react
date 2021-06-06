import './App.css';

function App() {
  return (
    <div className="App">
      <video
        className="landing-page-video"
        src="https://storage.coverr.co/videos/STGCDNDz2bG1wn01N22Z3JHauO931im1t?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjIxMzQxNzU2fQ.ivjRk6kGOVuEJ89HsOivee137m82HDRqeg2qKPCj4Xo"
        autoPlay
        loop
        muted
      />
      <div id="containerAll">
        <div class="location">
          <h1 class="locationCity">City Goes Here.</h1>
          <h3 class="icon">Icon</h3>
        </div>

        <div class="temperature">
          <h1 class="tempDegree">
            60&deg; <span>F</span>
          </h1>
          <h3 class="tempDescrip">Description</h3>
        </div>
        <p class="copywrite"> Chadwick Green &copy;</p>
      </div>
    </div>
  );
}

export default App;
