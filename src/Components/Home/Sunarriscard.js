import React, { useState,useEffect } from 'react'
import axios from "axios";
import kundali from "../../Images/Card/kundali.png"
import Sunarrise from "../../Css/Home/sunarrisecard.css"
function Sunarriscard() {
  const[rashi,setRashi] = useState(null);
  const[image,setImage] = useState(null);
  const[nakshatra,setNakshatra] = useState(null);
  const[tithi,setTithi] = useState(null);
  const[sunrise,setSunrise] = useState(null);
  const[sunset,setSunset] = useState(null);
  const[yoga,setYoga] = useState(null);

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("https://subhashishgurujii.onrender.com/home/todays-update/");
    setRashi(result.data[0].rashi);
    setImage(result.data[0].image);
    setNakshatra(result.data[0].nakshatra);
    setTithi(result.data[0].tithi);
    setSunrise(result.data[0].sunrise);
    setSunset(result.data[0].sunset);
    setYoga(result.data[0].yoga);
    console.log(result.data[0]);
    }
    catch(e){
      console.log(e);
    }
   /* console.log("hello");
    console.log(bannerimage);*/
  }

  return (
    <div className='sunarriseouterdiv'>
        <div className='sunarrisechangediv'>
          <img id="sunarrisekunaliimage" src={image} alt="error" /> 
          <div className='textupdate'>
              <h2 id="vedicpanchang">Vedic Panchang</h2>
            <div className='textouterdiv'>
            <div className='textarrangementdiv'>
              <p id="sunarrisedatepara">Nakshatra: {nakshatra}</p>
              <p id="sunarrisedatepara">Tithi: {tithi}</p>
              <p id="sunarrisedatepara1" >Sunrise: {sunrise}<p id="nextupdate">Sunset:{sunset}</p></p>
              <p id="sunarrisedatepara2" >Yoga:{yoga} <p id="nextupdate">Rashi:{rashi} </p></p>
            </div>
            </div>

          </div>
        </div>
        <p className='sunarrisepara'>
        The original purpose of astrology, on the other hand, was to inform the individual of the course 
        of his life on the basis of the positions of the planets and of the zodiacal signs.
        </p>
    </div>
  )
}

export default Sunarriscard