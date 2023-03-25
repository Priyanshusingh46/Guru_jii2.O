import React from "react";
import Header from "../Components/Common/Header";
import Aajkarashifaal from "../Components/Home/Aajkarashifaal";
import Blogs from "../Components/Home/Blogs";
import DailyUpdate from "../Components/Home/DailyUpdate";
import Festival from "../Components/Home/Festival";
import Footer from "../Components/Home/Footer";
import GuruFirstDiv from "../Components/Home/GuruFirstDiv";
import GurujiiWord from "../Components/Home/GurujiiWord";
//import GurujiiWordCard from "../Components/Home/GurujiiWordCard";
import InfoGurujii from "../Components/Home/InfoGurujii";
import Rashidiv from "../Components/Home/Rashidiv";
import ResolveProblemCard from "../Components/Home/Resolveproblemcard";
import Service from "../Components/Home/Service";
import Solar from "../Components/Home/Solar";
import Testimonial from "../Components/Home/Testimonial";
import css from "../Css/Home/home.css";

function Home() {
  return (
    <div className="Homediv">
      <Header />
      <GuruFirstDiv />
      <Rashidiv />
      <Solar />
      <InfoGurujii />
      <Service />
      <div style={{ background: "#FFF6E4", marginTop: "-2%" }}>
        <DailyUpdate />
        <ResolveProblemCard />
        <GurujiiWord />
        <Aajkarashifaal />
        <Festival />
        <Blogs />
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
