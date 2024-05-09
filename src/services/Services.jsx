import React from "react";
import "./Services.css";
import servimage from "../assets/servimage.png";

const Services = () => {
  return (
    <>
      <div className="mainServContainer">
        <div className="servicesContainer">
          <div className="text">
            <h1>Our Services</h1>
          </div>
        </div>
      </div>
      <div className="subtext">
        <h1>A comprehensive investment</h1>
        <h1>experience tailored to high-end needs</h1>
      </div>
      <div className="para">
        <h3>Sales</h3>
        <br />
        <p>
          Liv Squared team of professional agents boast a strategic mindset,
          powered by a pool of high-end properties — in collaboration with top
          developers and investors- which allows them to identify the...
          <br />
          <br />
          <span style={{ cursor: "pointer" }}>Read More</span>
          <hr className="ruler" />
        </p>
        <br />
        <h3>Current Services</h3>
        <br />
        <p>
          Residential Real Estate Investment Advisory (Primary and Resale)
          Residential Real Estate Resale Property Management Commercial Real
          estate leasing and sale
        </p>
        <br />
        <br />
        <h3>After Sales</h3>
        <br />
        <p>
          But the efficiency of this remarkable sales team does not end with
          closing deals. Enter the equally exceptional after sales team – a
          dedicated group of experts who understand the importance of ...
          <br />
          <br />
          <span style={{ cursor: "pointer" }}>Read More</span>
          <hr className="ruler" />
        </p>
      </div>

      <div className="imgServMain">
        <img src={servimage} alt="property" className="imgServMain" />

        <div className="textonimg">
          <p
            style={{
              fontFamily: "helvetica",
              fontSize: "260%",
              color: "#FFFFFF",
            }}
          >
            Personalised Investment Advisory{" "}
          </p>
          <br />
          <p
            style={{
              fontFamily: "helvetica",
              fontSize: "130%",
              color: "#FFFFFF",
            }}
          >
            Connect with us for a comprehensive real estate investment
          </p>
          <p
            style={{
              fontFamily: "helvetica",
              fontSize: "130%",
              color: "#FFFFFF",
            }}
          >
            experience tailored to high end needs
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
