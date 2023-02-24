import React from "react";
import "./Hero.css";

// code for the hero component which includes the title, learn more button and background image in the css
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <h1>Tree House</h1>
          <h1 className="blue">Brewing</h1>
          <h1>Company</h1>
          <div>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
