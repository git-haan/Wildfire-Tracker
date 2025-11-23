import React from 'react';
import './Lander.css';

const Lander = () => {
  const goToApp = () => {
    // navigate to the app route using a hash so we don't need a router
    window.location.hash = '#/app';
  };

  return (
    <div className="lander-root">
      <div className="lander-card">
        <h1 className="lander-title">Wildfire Tracker</h1>
        <p className="lander-sub">Visualize recent wildfires on an interactive map</p>
        <button className="lander-cta" onClick={goToApp}>Open App</button>
      </div>
    </div>
  );
};

export default Lander;
