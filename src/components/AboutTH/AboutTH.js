import React from "react";
import "./AboutTH.css";

const AboutTH = () => {
  return (
    <div className="aboutTH">
      <div className="container">
        <div className="content">
          <h2>
            <span>About</span> Us
          </h2>
          <br></br>
          <h3>Founded in 2011</h3>
          <p>
            Tree House Brewing Company began in a small red barn in Brimfield,
            Massachusetts. Since day one our goal has been to present you with
            reliably delightful beer that can contribute positively to life’s
            precious moments, and serve them in a cheerful, communal
            environment. Having grown from a five-gallon Coleman cooler
            brewhouse to a state-of-the-art 60 BBL, German-engineered brewhouse,
            Tree House, an independent brewer-owned brewery, is driven by the
            same people with the same energy and the same intent to bring you
            joy as it was ten years ago.
          </p>
          <div>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTH;
