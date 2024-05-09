import React from "react";
import "./ReadyNewOptions.css";
import { FaChevronDown } from "react-icons/fa";

const ReadyNewOptions = () => {
  return (
    <>
      <div className="optionContainer">
        <div>
          <ul className="options">
            <li className="bottomLine">Ready</li>
            <li className="bottomLine">New Projects</li>
          </ul>
        </div>
        <div>
          <ul className="options2">
            <div style={{ display: "flex", gap: "5px" }}>
              <li>Buy</li>
              <li>
                <FaChevronDown className="arrow" />
              </li>
            </div>
            <li>Community or Building</li>
            <li>Location</li>
            <li>Price</li>
            <li>Search</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ReadyNewOptions;
