import React, { useState,useEffect } from 'react'
import axios from "axios";
import demoImage from '../../Images/Home/DemoImage.png'
import GuruFirstdiv from '../../Css/Home/GuruFirstdiv.css'
import chat from "../../Images/Home/chat.png"
import Instagram from "../../Images/Home/instagram.png";
import Facebook from "../../Images/Home/facebook.png";
import Whatsaap from "../../Images/Home/whatsapp.png";
import YouTube from "../../Images/Home/youtube.png";
function GuruFirstDiv() {

  const[data,setData] = useState(null);
  const[bannerimage, setBannerImage] = useState(null);

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("https://subhashishgurujii.onrender.com/home/banner-image/");
    setData(result.data[0].banner_description);
    setBannerImage(result.data[0].banner_image);
    }
    catch(e){
      console.log(e);
    }
   /* console.log("hello");
    console.log(bannerimage);*/
  }



  return (
    <div className='GuruFirstDivOuterBox'>
    <div className='GuruFirstDivBox'>
    <div className='TextPart'>
            <p id="AchrayaTextPart">{data}</p>
            <div className='NormalBox'></div>
    </div>

    <div className='demoImageBox'>
        <img id="demoImage" src={bannerimage} alt="error"/>
    </div>

    <div className='SocialMedia'>

      <div className="socialdiv">
        <img id="oneSocialMediaImage" src={Instagram} alt="error" />
        <p id="SocialMediaText">Instagram</p>
      </div>

      <div className="socialdiv">
        <img id="oneSocialMediaImage" src={Facebook} alt="error" />
        <p id="SocialMediaText">Facebook</p>
      </div>


      <div className="socialdiv">
        <img id="oneSocialMediaImage" src={Whatsaap} alt="error" />
        <p id="SocialMediaText">Whatsaap</p>
      </div>

      <div className="socialdiv">
        <img id="oneSocialMediaImage" src={YouTube} alt="error" />
        <p id="SocialMediaText">YouTube</p>
      </div>

  </div>


    </div>
    
    <img id="chatImage" src={chat} alt="error" />
    </div>
  )
}

export default GuruFirstDiv