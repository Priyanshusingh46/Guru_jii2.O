import React, { useState } from 'react'
import demoImage from '../../Images/Home/DemoImage.png'
import GuruFirstdiv from '../../Css/Home/GuruFirstdiv.css'
import chat from "../../Images/Home/chat.png"
import Instagram from "../../Images/Home/instagram.png";
import Facebook from "../../Images/Home/facebook.png";
import Whatsaap from "../../Images/Home/whatsapp.png";
import YouTube from "../../Images/Home/youtube.png";
function GuruFirstDiv() {
  const[styles,setStyle]=useState("oneSocialMedia1");
  const changeStyle = () => {
    
    setStyle("oneSocialMedia");
  };

  const[styles1,setStyle1]=useState("oneSocialMedia1");
  const changeStyle1 = () => {
    
    setStyle1("oneSocialMedia");
  };

  const[styles2,setStyle2]=useState("oneSocialMedia1");
  const changeStyle2 = () => {
    
    setStyle2("oneSocialMedia");
  };

  const[styles3,setStyle3]=useState("oneSocialMedia1");
  const changeStyle3 = () => {
    
    setStyle3("oneSocialMedia");
  };
  return (
    <div className='GuruFirstDivOuterBox'>
    <div className='GuruFirstDivBox'>
    <div className='TextPart'>
            <p id="AchrayaTextPart">
            Acharya (transl. Pedagogy) is a 2022 Indian Telugu-language action drama film[4]
            written and directed by Koratala Siva. 
            </p>
            <div className='NormalBox'></div>
    </div>

    <div className='demoImageBox'>
        <img id="demoImage" src={demoImage} alt="error"/>
    </div>

    <div className='SocialMedia'>

      <div className={styles} onClick={changeStyle}>
        <img id="oneSocialMediaImage" src={Instagram} alt="error" />
        <p id="SocialMediaText">Instagram</p>
      </div>

      <div className={styles1} onClick={changeStyle1}>
        <img id="oneSocialMediaImage" src={Facebook} alt="error" />
        <p id="SocialMediaText">Facebook</p>
      </div>


      <div className={styles2} onClick={changeStyle2}>
        <img id="oneSocialMediaImage" src={Whatsaap} alt="error" />
        <p id="SocialMediaText">Whatsaap</p>
      </div>

      <div className={styles3} onClick={changeStyle3}>
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