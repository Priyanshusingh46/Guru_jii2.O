import React, { useState,useEffect } from 'react'
import axios from "axios";
import kundali from "../../Images/Card/kundali.png"
import Sunarrise from "../../Css/Home/sunarrisecard.css"
function Sunarriscard() {
  const[data,setData] = useState(null);

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("https://subhashishgurujii.onrender.com/home/todays-update/");
    setData(result.data[0]);
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
          <img id="sunarrisekunaliimage" src={data.image} alt="error" /> 
          <div className='textupdate'>
              <h2 id="vedicpanchang">Vedic Panchang</h2>
            <div className='textouterdiv'>
            <div className='textarrangementdiv'>
              <p id="sunarrisedatepara">Nakshatra: {data.nakshatra}</p>
              <p id="sunarrisedatepara">Tithi: {data.tithi}</p>
              <p id="sunarrisedatepara1" >Sunrise: {data.sunrise}<p id="nextupdate">Sunset: {data.sunset}</p></p>
              <p id="sunarrisedatepara2" >Yoga: {data.yoga}<p id="nextupdate">Rashi: {data.rashi}</p></p>
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