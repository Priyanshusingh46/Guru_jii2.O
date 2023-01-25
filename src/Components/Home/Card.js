import React from 'react'
import card1 from "../../Images/Card/card1.png"
import cards from "../../Css/Home/cards.css"
function Card({image,title}) {
  return (
    <div className='Cardouterdiv'>
        <div className='cardimagediv'>     
        <img id="cardimage"src={image} alt="error" />
        </div>
        <h2 id="cardheading">{title}</h2>
        <p id="cardpara">
        Description of above service provided by Guruji and their company
        </p>


    </div>
  )
}

export default Card