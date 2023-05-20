import React from 'react'
import card1 from "../../Images/Card/card1.png"
import "../../Css/Home/cards.css"
import { Link } from 'react-router-dom'

function CardService(props) {
  console.log(props);
    console.log(props.id);
  return (
    
    <div className='Cardouterdiv' >
     
        <div className='cardimagediv' >     
        <Link to={"/servicedescription/"+props.id}> <img id="cardimage"src={props.image} alt="error"  /></Link>
        </div>
        <Link to={"/servicedescription/"+props.id}><h2 id="cardheading">{props.title}</h2></Link>
        <Link to={"/servicedescription/"+props.id}><p id="cardpara">{props.desc}</p></Link>
    </div>
    
  )
}

export default CardService