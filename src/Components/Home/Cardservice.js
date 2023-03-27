import React from 'react'
import card1 from "../../Images/Card/card1.png"
import "../../Css/Home/cards.css"
import { Link } from 'react-router-dom'

function CardService({image,title}) {
  console.log(image);
  return (
    
    <div className='Cardouterdiv'>
     
        <div className='cardimagediv' >     
        <Link to="/servicedescription"> <img id="cardimage"src={image} alt="error"  /></Link>
        </div>
        <h2 id="cardheading">{title}</h2>
        <p id="cardpara">Description of above service provided by Guruji and their company</p>


    </div>
    
  )
}

export default CardService