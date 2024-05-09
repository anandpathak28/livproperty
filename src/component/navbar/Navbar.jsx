import React from "react";
import logo from "../../assets/Group506.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="NavContainer">
      <div>
        <img src={logo} alt="logo" width={112} />
      </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Properties</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
