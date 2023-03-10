import React from "react";
import "./Ordering.css";
import CRUD from "../CRUD/CRUD";

// This is where users are able to add their orders
// I imported the CRUD page so the CRUD operaitons appear on this page in the website

const Ordering = () => {
  return (
    <div className="ordering">
      <div className="container">
        <div className="content">
          <h2>
            <span>Place Your Order!</span>
          </h2>
          <p>
            We know you want to bring some of this beer home with you, and now
            you can! Grab a bunch to share or stash them for yourself.
          </p>
          <CRUD />
        </div>
      </div>
    </div>
  );
};

export default Ordering;
