import "./hero.css";

import React from "react";

import intro from "../Assets/1.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={intro} alt="1" />
      </div>
      <div className="content">
        <p>HI, I'M A SOFTWARE DEVELOPER</p>
        <h1>MERN Developer</h1>
        <div>
          <Link to="/project" className="btn">
            PROJECTS
          </Link>

          <Link to="/contact" className="btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
