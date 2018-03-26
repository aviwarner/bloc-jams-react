import React from 'react';

const Landing = () => (
  <section className="landing jumbotron container">
    <h1 className="hero-title text-light display-4 mb-5">Turn the music up!</h1>

    <section className="selling-points">
      <div className="card-deck container text-left">
        <div className="point card card-body">
          <h6 className="point-title card-title text-muted">Choose your music</h6>
          <p className="point-description card-text small">There's a ton of music out there so you should listen to music that you choose. Not music we choose. We don't even.</p>
        </div>
        <div className="point card card-body">
          <h6 className="point-title card-title text-muted">Unlimited, streaming, ad-free</h6>
          <p className="point-description card-text small">Unlimited in the sense that we'll have like... 3 albums.</p>
        </div>
        <div className="point card card-body">
          <h6 className="point-title card-title text-muted">Mobile enabled</h6>
          <p className="point-description card-text small">Listen to your music on the go. Walking, on a train, in a plane. While eating green eggs & ham.</p>
        </div>
      </div>
    </section>
  </section>
);

export default Landing;
