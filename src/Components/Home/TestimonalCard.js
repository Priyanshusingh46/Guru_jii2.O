import React from 'react'
import image from "../../Images/Card/me.jpg"
import css from "../../Css/Home/Testimonalcard.css"
function TestimonalCard() {
  return (
    <div className='Testimonalcardouterdiv'>
        <p id="text">
        I just met guru ji 1st time in kolkata. and I was amazed that without me telling anything
        about myself he predicted everything abt my past accuratly. means he has true knowledge.
        </p>
        <div className='Personinfo'>
            <p id="text">Konark(CEO of P2C)</p>
            <img id="image"src={image} alt="error"/>
        </div>
    </div>
  )
}

export default TestimonalCard