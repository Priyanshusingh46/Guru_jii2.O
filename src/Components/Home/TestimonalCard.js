import React from 'react'
import image from "../../Images/Card/me.jpg"
import css from "../../Css/Home/Testimonalcard.css"
function TestimonalCard({name ,desc ,desg ,imge}) {
  //console.log(props.data.description);
  return (
    <div className='Testimonalcardouterdiv'>
        <p id="texts">{desc}</p>
        <div className='Personinfo'>
            <p id="texts">{name}{desg}</p>
            <img id="image"src= {imge} alt="error"/>
        </div>
    </div>
  )
}

export default TestimonalCard