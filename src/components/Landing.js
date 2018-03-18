import React from 'react';

const Landing = () => (
  <section className="landing">
    <h1 className="hero-title">Turn the music up!</h1>

    <section className="selling-points">
      <div className="point">
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">There's a ton of music out there so you should listen to music that you choose. Not music we choose. We don't even.</p>
      </div>
      <div className="point">
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">Unlimited in the sense that we'll have like... 3 albums.</p>
      </div>
      <div className="point">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. Walking, on a train, in a plane. While eating green eggs & ham.</p>
      </div>
    </section>
  </section>
);

export default Landing;
