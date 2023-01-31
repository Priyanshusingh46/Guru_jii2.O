import React from "react";
import Header from "../Components/Common/Header";
import DailyUpdate from "../Components/Home/DailyUpdate";
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

function Home() {
  return (
    <div>
      <Header />
      <GuruFirstDiv />
      <Rashidiv />
      <Solar />
      {/*<InfoGurujii />*/}
      <Service />
     {/* <div style={{background:"#FFF6E4"}}>
      <DailyUpdate />
      <ResolveProblemCard />
      <GurujiiWord />
      <Testimonial />
      </div>
  <Footer />*/}
      
    </div>
  );
}

export default Home;
