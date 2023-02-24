import React from "react";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import {
  FiMail,
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiDribbble,
} from "react-icons/fi";
import "./Footer.css";

import { Link } from "react-scroll";

// The footer appears on all pages. It includes the icon and title from the navbar
// It also has an input box to include email adress to join the "brew crew" and a react mail icon
// includes icons for different social media sites
// also includes the icon for the react scroll feature

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="logo-footer">
            <SportsBarIcon className="icon" />
            <h2>Tree House</h2>
          </div>
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            duration={500}
          >
            <BsFillArrowUpCircleFill className="icon" />
          </Link>
        </div>
        <div className="col-container">
          <div className="col">
            <h3>Navigation</h3>
            <p>Home</p>
            <p>Swag</p>
            <p>Locations</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <h3>My Account</h3>
            <p>Home</p>
            <p>Data</p>
            <p>Locations</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <h3>Information</h3>
            <p>Home</p>
            <p>Data</p>
            <p>Locations</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <h3>Legal</h3>
            <p>Home</p>
            <p>Data</p>
            <p>Locations</p>
            <p>Contact</p>
          </div>
          <form>
            <h3>Join Our Brew Crew</h3>
            <input type="email" placeholder="Enter your email" />
            <FiMail className="mail-icon" />
            <div className="social-group">
              <FiInstagram className="social-icon" />
              <FiFacebook className="social-icon" />
              <FiLinkedin className="social-icon" />
              <FiDribbble className="social-icon" />
              <FiGithub className="social-icon" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
