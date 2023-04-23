import React, { useState,useEffect } from 'react'
import axios from "axios";
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


  const[data,setData] = useState(null);

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("https://subhashishguruji.onrender.com/home/our-services-cards/");
    setData(result.data);
    //console.log(result.data);
    }
    catch(e){
      console.log(e);
    }
   /* console.log("hello");*/
    
  }


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
        {
          data && data.map((data)=>{
            //console.log("map",data.title);
           return (<Card data={data}/>)
           
          })
        }
        </div>
    </div>
  )
}

export default Service