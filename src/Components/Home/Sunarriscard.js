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
    console.log(result);
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
          <img id="sunarrisekunaliimage" src={kundali} alt="error" /> 
          <div className='textupdate'>
              <h2 id="vedicpanchang">Vedic Panchang</h2>
            <div className='textouterdiv'>
            <div className='textarrangementdiv'>
              <p id="sunarrisedatepara">Nakshatra: Bharani</p>
              <p id="sunarrisedatepara">Tithi: Poornima</p>
              <p id="sunarrisedatepara1" >Sunrise: 06:16<p id="nextupdate">Sunset: 17:33</p></p>
              <p id="sunarrisedatepara2" >Yoga: Vyatipata<p id="nextupdate">Rashi: Aries</p></p>
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