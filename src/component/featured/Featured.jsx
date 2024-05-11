import React from "react";
import "./Featured.css";
import property from "../../assets/property.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Featured = () => {
  useGSAP(() => {
    gsap.from("#effect1", {
      color: "red",
      duration: 2,
      delay: 1,
      rotate: 360,
      stagger: -1,
    });
  });
  return (
    <>
      <div className="mainContainer">
        <div className="featureContainer">
          <div className="text">
            <h1>Featured</h1>
          </div>
          <div className="spanStyle">
            <span>Villas</span>
            <span>Apartments</span>
            <span>View All</span>
          </div>
        </div>

        <div className="featureContainer1">
          <div className="text">
            <h1>Properties</h1>
          </div>
          <div className="spanStyle">
            <span>Rent</span>
            <span>Buy</span>
            <span>Sell</span>
          </div>
        </div>
      </div>
      <div className="imgMain">
        <img
          src={property}
          alt="property"
          height={293}
          width={304}
          id="effect1"
        />
        <img
          src={property}
          alt="property"
          height={293}
          width={304}
          id="effect1"
        />
        <img
          src={property}
          alt="property"
          height={293}
          width={304}
          id="effect1"
        />
        <img
          src={property}
          alt="property"
          height={293}
          width={304}
          id="effect1"
        />
        <span class="first-txt">Explore All</span>
      </div>
    </>
  );
};

export default Featured;
