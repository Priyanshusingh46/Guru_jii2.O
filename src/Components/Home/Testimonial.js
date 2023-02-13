import React from 'react'
import design from "../../Images/Home/design.png";
import css from "../../Css/Home/Testimonal.css"
import TestimonalCard from "./TestimonalCard";
import image from "../../Images/Home/Data.png"
function Testimonial() {
  return (
    <div className='TestimonalOuterdiv'>
        <div className='HeadingofTestimonal'>
            <img id="desigin" src={design} alt="error"/>
            <h2 id="Testimonal">Testimonials</h2>
            <img id="desigin" src={design} alt="error"/>
        </div>

        <div className='Testimonalinfodiv'>
            <TestimonalCard />
            <TestimonalCard />
            <TestimonalCard />
        </div>

        <div className='Clientdataouterdiv'>

          <div className='clientdata'>
            <img id="clientimage"src={image} alt="error"/>
            <p id="number">10,000+</p>
            <p id="Happyclient">Happy Clients</p>
          </div>
          


          <div className='clientdata'>
            <img id="clientimage"src={image} alt="error"/>
            <p id="number">100+</p>
            <p id="Happyclient">Services Available</p>
          </div>
          

          <div className='clientdata'>
            <img id="clientimage"src={image} alt="error"/>
            <p id="number">2500+</p>
            <p id="Happyclient">Happy Family</p>
          </div>
         

        </div>
        
    </div>
  )
}

export default Testimonial