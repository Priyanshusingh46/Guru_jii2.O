import React from 'react'
import service from "../../Css/Home/service.css"
import Design from "../../Images/Home/design.png"
import Card from './Card'
import card1 from "../../Images/Card/card1.png"
import card2 from "../../Images/Card/card2.png"
import card3 from "../../Images/Card/card3.png"
import card4 from "../../Images/Card/card4.png"
import card5 from "../../Images/Card/card5.png"
import card6 from "../../Images/Card/card6.png"
import card7 from "../../Images/Card/card7.png"
import card8 from "../../Images/Card/card8.png"
import card9 from "../../Images/Card/card9.png"
import card10 from "../../Images/Card/card10.png"
function Service() {
  const text = "Jyotish"
  const text1 = "Puja Anusthan"
  const text2 = "Vastu"
  const text3 = "Ratna Vigyan"
  const text4 = "Rashifal"
  const text5 = "Panchang"
  const text6 = "Sadhna"
  const text7 = "Meditation"
  const text8 = "Kundli"
  const text9 = "Samadhan"

  return (
    <div className='outerservicediv'>
        <div className='designdiv'>
            <img id= "designing"src={Design} alt="error" />
            <p id="servicetext"> Our Services </p>
            <img id= "designing" src={Design} alt="error" />
        </div>
        <div className='carddiv'>
          <Card image={card1} title={text}/>
          <Card image={card2} title={text1}/>
          <Card image={card3} title={text2}/>
          <Card image={card4} title={text3}/>
          <Card image={card5} title={text4}/>
          <Card image={card6} title={text5}/> 
          <Card image={card7} title={text6}/>
          <Card image={card8} title={text7}/>
          <Card image={card9} title={text8}/>
          <Card image={card10} title={text9}/>
        </div>
    </div>
  )
}

export default Service