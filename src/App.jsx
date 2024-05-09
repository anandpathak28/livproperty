import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./component/navbar/Navbar";
import bg from "./assets/bg.png";
import HeroSection from "./component/heroSection/HeroSection";
import ReadyNewOptions from "./component/ReadyNewOptions/ReadyNewOptions";
import Featured from "./component/featured/Featured";
import Services from "./services/Services";
import Insta from "./component/instagram/Insta";
import Footer from "./component/footer/Footer";

AOS.init();
function App() {
  return (
    <>
      <div
      // style={{
      //   backgroundImage: `url(${bg})`,
      //   height: "auto",
      // }}
      >
        {/* <div
          style={{ height: 200, width: 200, backgroundColor: "green" }}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="center-bottom"
          data-aos-mirror="true"
        ></div> */}
        <div>
          <Navbar />
          <HeroSection />
          <ReadyNewOptions />
          <Featured />
          <Services />
          <Insta />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
