import React from 'react'
import card1 from "../../Images/Card/card1.png"
import "../../Css/Home/cards.css"
import { Link } from 'react-router-dom'

function Card(props) {
 // console.log(props.data.image);
  return (
    
    <div className='Cardouterdiv'>
     
        <div className='cardimagediv' >
           <img id="cardimage"src={props.data.image} alt="error"  />
        </div>
        <h2 id="cardheading">{props.data.title}</h2>
        <p id="cardpara">{props.data.description}</p>


    </div>
    
  )
}

export default Card

/*
props.data.image*/