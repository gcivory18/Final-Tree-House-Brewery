import React, { useState } from "react";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

// creating the navbar with the different pages and icon
// also created the hamburger for responsive design
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div name="top" className="navbar">
      <div className="container">
        <div className="logo">
          <SportsBarIcon className="icon" />
          <h1>Tree House</h1>
        </div>

        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>{" "}
          </li>
          <li>
            <Link to="/order">Order Your Beer!</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button>Sign in</button>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? <FaBars className="icon" /> : <FaTimes className="icon" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
