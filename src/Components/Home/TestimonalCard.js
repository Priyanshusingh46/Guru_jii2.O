import React from 'react'
import image from "../../Images/Card/me.jpg"
import css from "../../Css/Home/Testimonalcard.css"
function TestimonalCard(props) {
  console.log(props.data.description);
  return (
    <div className='Testimonalcardouterdiv'>
        <p id="texts">{props.data.description}</p>
        <div className='Personinfo'>
            <p id="texts">{props.data.name}{props.data.designation}</p>
            <img id="image"src={props.data.image} alt="error"/>
        </div>
    </div>
  )
}

export default TestimonalCard