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
     const face = "https://m.facebook.com/profile.php?id=100003397943168";
    const insta = "https://www.instagram.com/subhashish_guruji/";
    const you = "https://youtube.com/@JyotishAcharya"
   const twitter = "https://twitter.com/subhashishshar9?lang=en";

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("https://subhashishguruji.onrender.com/home/banner-image/");
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
            {/*<div className='NormalBox'></div>*/}
    </div>

    <div className='demoImageBox'>
        <img id="demoImage" src={bannerimage} alt="error"/>
    </div>

    <div className='SocialMedia'>

      <div className="socialdiv">
        <img id="oneSocialMediaImage" src={Instagram} alt="error" />
        <a href={insta}> <p id="SocialMediaText">Instagram</p></a>
      </div>

      <div className="socialdiv">
        <img id="oneSocialMediaImage" src={Facebook} alt="error" />
        <a href={face}><p id="SocialMediaText">Facebook</p></a>
      </div>


      <div className="socialdiv">
        <img id="oneSocialMediaImage" src={Whatsaap} alt="error" />
       <a href="https://wa.me/9999808651"> <p id="SocialMediaText">Whatsaap</p></a>
      </div>

      <div className="socialdiv">
        <img id="oneSocialMediaImage" src={YouTube} alt="error" />
        <a href={you}> <p id="SocialMediaText">YouTube</p></a>
      </div>

  </div>


    </div>
    
    <img id="chatImage" src={chat} alt="error" />
    </div>
  )
}

export default GuruFirstDiv

/*
{data}*/