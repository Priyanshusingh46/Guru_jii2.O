import React, { useState,useEffect } from 'react'
import axios from "axios";
import design from "../../Images/Home/design.png";
import css from "../../Css/Home/Testimonal.css"
import TestimonalCard from "./TestimonalCard";
import image from "../../Images/Home/Data.png"
function Testimonial() {

  const[data,setData] = useState(null);
  const[data1,setData1] = useState(null);
  const[data2,setData2] = useState(null);

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("https://subhashishgurujii.onrender.com/home/testimonal");
    setData(result.data[0]);
    setData1(result.data[1]);
    setData2(result.data[2]);
    //console.log(result.data[0]);
    }
    catch(e){
      console.log(e);
    }
   /* console.log("hello");
    console.log(bannerimage);*/
  }



  return (
    <div className='TestimonalOuterdiv'>
        <div className='HeadingofTestimonal'>
            <img id="desigin" src={design} alt="error"/>
            <h2 id="Testimonal">Testimonials</h2>
            <img id="desigin" src={design} alt="error"/>
        </div>

        <div className='Testimonalinfodiv'>
            <TestimonalCard data={data}/>
            <TestimonalCard data={data1}/>
            <TestimonalCard data={data2}/>
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