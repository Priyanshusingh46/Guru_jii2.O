import React from 'react'
import Header from '../Components/Common/Header'
import AboutHeadlines from "../Components/About/AboutHeadlines";
import AboutKundalipage from '../Components/About/Aboukundalipage';
import Footer from "../Components/Home/Footer"
function Aboutkundali() {
  return (
    <div>
        <Header />
        <div style={{background: "#FFF6E4"}}>
        <AboutHeadlines />
        <AboutKundalipage />
        <Footer />
        </div>
       
    </div>
  )
}

export default Aboutkundali