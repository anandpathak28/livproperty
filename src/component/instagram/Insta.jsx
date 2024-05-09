import React from "react";
import "./Insta.css";
import property1 from "../../assets/Rectangle 76.jpg";
import property2 from "../../assets/Rectangle 77.jpg";
import property3 from "../../assets/Rectangle 78.png";
import property4 from "../../assets/Rectangle 79.png";
import { FaInstagram } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Insta = () => {
  useGSAP(() => {
    gsap.from("#effect2", {
      color: "red",
      duration: 2,
      delay: 1,
      rotate: 360,
      stagger: 1,
      ScrollTrigger: {
        trigger: "#effect2",
      },
    });
  });
  return (
    <>
      <div className="xmainContainer">
        <div className="xfeatureContainer">
          <div className="xtext">
            <h1>Instagram</h1>
          </div>

          <div>
            <div className="icmain">
              <FaInstagram className="ic" />
              <span className="ict">Instagram</span>
            </div>
          </div>
        </div>
      </div>
      <div className="ximgMain">
        <img
          src={property1}
          alt="property"
          height={293}
          width={304}
          id="effect2"
        />
        <img
          src={property2}
          alt="property"
          height={293}
          width={304}
          id="effect2"
        />
        <img
          src={property3}
          alt="property"
          height={293}
          width={304}
          id="effect2"
        />
        <img
          src={property4}
          alt="property"
          height={293}
          width={304}
          id="effect2"
        />
        <span class="xfirst-txt">Explore All</span>
      </div>
    </>
  );
};

export default Insta;
