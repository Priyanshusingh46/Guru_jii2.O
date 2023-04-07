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
    const[desc1,setDesc1] = useState(null);
    const[desc2,setDesc2] = useState(null);
    const[desc3,setDesc3] = useState(null);

    const[image1,setImage1] = useState(null);
    const[image2,setImage2] = useState(null);
    const[image3,setImage3] = useState(null);

    const[heading1,setHeading1] = useState(null);
    const[heading2,setHeading2] = useState(null);
    const[heading3,setHeading3] = useState(null);

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("https://subhashishgurujii.onrender.com/home/guruji-words/");
    setData(result.data);
    setDesc1(result.data[0].description)
    setDesc2(result.data[1].description)
    setDesc3(result.data[2].description)
    setImage1(result.data[0].image)
    setImage2(result.data[1].image)
    setImage3(result.data[2].image)

    setHeading1(result.data[0].heading)
    setHeading1(result.data[1].heading)
    setHeading1(result.data[2].heading)
    //console.log(result.data);
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
        <GurujiiWordCard heading={heading1} para={desc1} image={image1}/>
        <GurujiiWordCard heading={heading2} para={desc2} image={image2}/>
        <GurujiiWordCard heading={heading3} para={desc3} image={image3}/>
            
      
       
        </Carousel>
    </div>
  )
}

export default GurujiiWord