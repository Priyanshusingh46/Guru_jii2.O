import React, { useState,useEffect } from 'react'
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import GurujiiWordCard from './GurujiiWordCard';
import mundan from '../../Images/Home/mundan.png';
import mundan1 from '../../Images/Rashi/Ellipse1.png';
import mundan2 from '../../Images/Rashi/Ellipse2.png';
function GurujiiWord() {

    const[data1,setData] = useState(null);
  const[bannerimage, setBannerImage] = useState(null);

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("https://subhashishgurujii.onrender.com/home/guruji-words/");
    setData(result.data);
    console.log(result.data.description);
    }
    catch(e){
      console.log(e);
    }
   /* console.log("hello");
    console.log(bannerimage);*/
  }

    const data=[
        {
            heading:"Mundan",
            para:"In Hinduism, the mundan is one of 16 purification rituals known as Shodasha Samskara. The ceremony is believed to rid the baby of any negativity from their past life while promoting mental and spiritual development.",
            image:{mundan}
        },
        {
            heading:"Shadi",
            para:"In Hinduism, the mundan is one of 16 purification rituals known as Shodasha Samskara. The ceremony is believed to rid the baby of any negativity from their past life while promoting mental and spiritual development.",
            image:{mundan1}
        },
        {
            heading:"Vivah",
            para:"In Hinduism, the mundan is one of 16 purification rituals known as Shodasha Samskara. The ceremony is believed to rid the baby of any negativity from their past life while promoting mental and spiritual development.",
            image:{mundan2}
        },
    ]
  return (
    <div>
        <Carousel showThumbs={false} showArrows={true}>
        {data.map((data1, index) => (
            
            <div key={index}>
            <GurujiiWordCard heading={data1.heading} para={data1.description} image={data1.image}/>
            </div>
      
       ))}
        </Carousel>
    </div>
  )
}

export default GurujiiWord