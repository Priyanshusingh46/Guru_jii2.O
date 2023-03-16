import React from "react";
import AboutHeadlines from "../Components/About/AboutHeadlines";
import Aboutphoto from "../Components/About/Aboutphoto";
import Latestfromguru from "../Components/About/Latestfromguru";
import MeetGurujii from "../Components/About/MeetGurujii";
import Header from "../Components/Common/Header";
import InfoGurujii from "../Components/Home/InfoGurujii";
import Footer from "../Components/Home/Footer";

function About1() {
  return (
    <div style={{overflowX:"hidden"}}>
      <Header />
      <div style={{ background: "#FFF6E4" }}>
        <AboutHeadlines />
        <Aboutphoto />
        <InfoGurujii />
        <MeetGurujii />
        <Latestfromguru />
      </div>
      <Footer />
    </div>
  );
}

export default About1;
