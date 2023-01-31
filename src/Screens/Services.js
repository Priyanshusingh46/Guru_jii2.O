import React from 'react'
import Header from "../Components/Common/Header"
import Design from "../Images/Common/Design.png";
import Design1 from "../Images/Common/Design1.png";
import Design2 from "../Images/Home/design.png";
import css from "../Css/Service/Services.css"
import card from "../Images/Card/card1.png"
import Card from '../Components/Home/Card';
import Footer from "../Components/Home/Footer";
function OurService() {
  const text = "Jyotish"
  return (
    <div className="servicepageouterdiv">
       <Header />
       <div className='designpartdiv'>
        <img id="design" src={Design} alt="err" />
        <img id="design1" src={Design2} alt="err" />
        <h2 id="textservice">Our Services</h2>
        <img id="design1" src={Design2} alt="err" />
        <img id="design" src={Design1} alt="err" />
        </div>
        <div className='carddiv'>
          <Card image={card} title={text}/>
          <Card image={card} title={text}/>
          <Card image={card} title={text}/>
          <Card image={card} title={text}/>
          <Card image={card} title={text}/>
          <Card image={card} title={text}/> 
          <Card image={card} title={text}/>
          <Card image={card} title={text}/>
          <Card image={card} title={text}/>
          <Card image={card} title={text}/>
        </div>
        <h3 id="otherservice">Other Services</h3>

        <div className='carddiv'>
          <Card image={card} title={text}/>
          <Card image={card} title={text}/>
          <Card image={card} title={text}/>
          <Card image={card} title={text}/>
          <Card image={card} title={text}/>
          <Card image={card} title={text}/> 
          <Card image={card} title={text}/>
          <Card image={card} title={text}/>
          <Card image={card} title={text}/>
          <Card image={card} title={text}/>
        </div>

        <Footer />

       </div>
  )
}

export default OurService