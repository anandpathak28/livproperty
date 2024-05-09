import React from "react";
import "./Footer.css";
import rect from "../../assets/Rectangle 59.png";
import logo from "../../assets/Group506.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="fimgmain">
        <img src={rect} alt="foot" className="fimage" />
      </div>
      <div className="footerContainer">
        <div className="ftextonimg">
          <p
            style={{
              fontFamily: "gotham1",
              fontSize: "130%",
              color: "#FFFFFF",
              fontWeight: 600,
            }}
          >
            A World of Leading Expertise
            <br /> Exclusively yours
          </p>
          <br />
          <p
            style={{
              fontFamily: "helvetica",
              fontSize: "130%",
              color: "#FFFFFF",
              fontWeight: 400,
            }}
          >
            Sign up for our newsletter to stay updated
            <br /> with what’s new in UAE real estate
          </p>
          <p
            style={{
              fontFamily: "helvetica",
              fontSize: "130%",
              color: "#FFFFFF",
              fontWeight: 400,
            }}
          ></p>
          <br />
          <br />
          <p
            style={{
              fontFamily: "helvetica",
              fontSize: "90%",
              color: "#FFFFFF",
              fontWeight: 400,
            }}
          >
            Enter your email
          </p>
          <input type="text" className="inputbox" />
          <button className="butt">Sign Up</button>
        </div>

        <div className="ftextonimg1">
          <p
            style={{
              fontFamily: "helvetica",
              fontSize: "100%",
              color: "#FFFFFF",
              fontWeight: 400,
            }}
          >
            Explore Residential in
          </p>
          <br />
          <ul>
            <li>Palm Jumeirah</li>
            <li>Jumeirah Beach Residence</li>
            <li>Dubai Marina</li>
            <li>Downtown Dubai</li>
            <li>Business Bay</li>
            <li>Dubai Hills</li>
            <li>City Walk</li>
          </ul>
        </div>
        <div className="ftextonimg2">
          <p
            style={{
              fontFamily: "helvetica",
              fontSize: "100%",
              color: "#FFFFFF",
              fontWeight: 400,
            }}
          >
            Liv Squared
          </p>
          <br />
          <ul>
            <li>About us</li>
            <li>Services</li>
            <li>Investment</li>
            <li>Sell your property</li>
            <li>Careers</li>
            <li>Blogs & news</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="ftextonimg3">
          <img src={logo} alt="logo" />
          <br />
          <br />
          <ul>
            <li>Office 304, Bay Square 11, Business</li>
            <li>Bay, Dubai, UAE</li>
            <li>Ph: +971 04 111 1111</li>
            <li>Email: info@example.com</li>
          </ul>
          <span>
            <FaFacebookF className="ico" />
            <FaXTwitter className="ico" />
            <FaInstagram className="ico" />
            <FaLinkedinIn className="ico" />
          </span>
        </div>
      </div>
      <div>
        <hr className="line" />
        <div className="bottoms">
          <p className="bottom1">Designed & Developed by Cheval</p>
          <p className="bottom2">© 2024 LIV Properties . All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
