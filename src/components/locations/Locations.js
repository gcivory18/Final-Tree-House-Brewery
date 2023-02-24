import React from "react";
import "./Locations.css";

const Locations = () => {
  return (
    <div className="locations">
      <div className="container">
        <div className="content">
          <h2>
            <span>Our</span> Locations
          </h2>
          <p>We are located in:</p>
          <ul>
            <li>Charlton, MA</li>
            <li>Tewksbury, MA</li>
            <li>Sandwich, MA</li>
            <li>Woodstock, CT</li>
          </ul>
          <div>
            <button>Visit Us!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
