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

  const[desc,setDesc] =useState(null);
  const[desc1,setDesc1] =useState(null);
  const[desc2,setDesc2] =useState(null);

  const[desg,setDesg] =useState(null);
  const[desg1,setDesg1] =useState(null);
  const[desg2,setDesg2] =useState(null);

  const[img,setImg] =useState(null);
  const[img1,setImg1] =useState(null);
  const[img2,setImg2] =useState(null);


  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("https://subhashishguruji.onrender.com/home/testimonal");
    setData(result.data[0].name);
    setData1(result.data[1].name);
    setData2(result.data[2].name);

    setDesc(result.data[0].description)
    setDesc1(result.data[1].description)
    setDesc2(result.data[2].description)

    setDesg(result.data[0].designation)
    setDesg1(result.data[1].designation)
    setDesg2(result.data[2].designation)

    setImg(result.data[0].image)
    setImg1(result.data[1].image)
    setImg2(result.data[2].image)

    console.log(result.data[0]);
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
            <TestimonalCard name ={data} desc ={desc} desg ={desg} imge ={img}/>
            <TestimonalCard name ={data1} desc ={desc1} desg ={desg1} imge ={img1} />
            <TestimonalCard name ={data2} desc ={desc2} desg ={desg2} imge ={img2} />
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