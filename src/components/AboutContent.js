import "./aboutcontent.css";
import React from "react";
import { Link } from "react-router-dom";
import mern1 from "../Assets/mern1.png";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am a MERN Stack Developer. I create responsive Secure websites for
          my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="singleimg">
                 <img src={mern1} className="img" alt="img"/>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
