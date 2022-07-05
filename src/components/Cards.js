import "./cards.css";

import React from "react";


import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="image" />
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-detials">
      <p>{props.text}</p>
      <div className="pro-btns">
       <a href={props.view} target="blank" className="btn">View</a>
       <a href={props.source} target="blank" className="btn">Source</a>
        
      </div>
    </div>
  </div>
  );
};

export default Cards;
