import React, { useState,useEffect } from 'react'
import axios from "axios";
import Ganesh from "../../Images/About/Ganesh.png";
import css from "../../Css/About/aboutphoto.css"
function Aboutphoto() {

  const[data,setData] = useState(null);
  const[data2,setData2] = useState(null);
  const[data3,setData3] = useState(null);
  const[data4,setData4] = useState(null);
  const[data5,setData5] = useState(null);
  const[data6,setData6] = useState(null);

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("https://subhashishguruji.onrender.com/about/guruji");
    setData(result.data[0].image);
    setData2(result.data[0].image2);
    setData3(result.data[0].image3);
    setData4(result.data[0].image4);
    setData5(result.data[0].image5);
    setData6(result.data[0].image6);
    //console.log(result.data[0].image);
    }
    catch(e){
      console.log(e);
    }
   /* console.log("hello");
    console.log(bannerimage);*/
  }

  return (
    <div className='outerdivofaboutdiv'>
        <img src={data} alt="error" id="aboutphotoimage"/>
        <img src={data2} alt="error" id="aboutphotoimage"/>
        <img src={data3} alt="error" id="aboutphotoimage"/>
        <img src={data4} alt="error" id="aboutphotoimage"/>
        <img src={data5} alt="error" id="aboutphotoimage"/>
        <img src={data6} alt="error" id="aboutphotoimage"/>
    </div>
  )
}

export default Aboutphoto