import React from "react";
import player from "../../assets/player.png";
import greate from "../../assets/greatjob.png";
import exp from "../../assets/exp.png";
import "./Sponsors.css";

function Sponsors() {
  return (
    <div className="sponsors-container">
      <div className="left-container">
        <img src={greate} alt="greate-job" />
        <img src={exp} alt="experiment" />
      </div>
      <div className="right-container">
        <img src={player} alt="player" />
      </div>
    </div>
  );
}

export default Sponsors;
