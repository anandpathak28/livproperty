import React from "react";
import "./HeroSection.css";
import right from "../../assets/right.png";

const HeroSection = () => {
  return (
    <>
      <div className="heroContainer">
        <div className="left">
          <h3 className="textsize">
            Timeless
            <br />
            luxury
            <br />
            re-imagined
          </h3>
        </div>
        <div className="right">
          <img src={right} alt="temp" className="hero" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
