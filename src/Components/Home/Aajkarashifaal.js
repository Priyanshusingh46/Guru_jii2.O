import React, { useState,useEffect } from 'react'
import axios from "axios";
import Img1 from "../../Images/Rashi/Ellipse1.png"
import Img2 from "../../Images/Rashi/Ellipse2.png"
import Img3 from "../../Images/Rashi/Ellipse3.png"
import Img4 from "../../Images/Rashi/Ellipse4.png"
import Img5 from "../../Images/Rashi/Ellipse5.png"
import Img6 from "../../Images/Rashi/Ellipse6.png"
import Img7 from "../../Images/Rashi/Ellipse7.png"
import Img8 from "../../Images/Rashi/Ellipse8.png"
import Img9 from "../../Images/Rashi/Ellipse9.png"
import Img10 from "../../Images/Rashi/Ellipse10.png"
import Img11 from "../../Images/Rashi/Ellipse11.png"
import Img12 from "../../Images/Rashi/Ellipse12.png"
import css from "../../Css/Home/aajkarashifaal.css"
function Aajkarashifaal() {

    const[data,setData] = useState(null);
  const[para, setPara] = useState(null);

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("https://subhashishgurujii.onrender.com/home/aj-ka-rashifal/");
    setData(result.data[0]);
    setPara(result.data[0].Aries);
    //console.log(result.data[0]);

    }
    catch(e){
      console.log(e);
    }
   /* console.log("hello");
    console.log(bannerimage);*/
  }

  return (
    <div>
        <div className='aajkarashifalouterdiv'>
            <p id="aajkarasifaltext">आज का राशिफल</p>
    <div className='backgroundrashifaldiv'>
        <div className='Rashidivoutterbox1'>
        <div className='rashidiv1' onClick={(e)=>setPara(data.Aries)}>
            <img id="rashiimagediv1"src={Img1} alt="error"/>
            <p id="totalrashifaltext">मेष</p>
        </div>

        <div className='rashidiv1' onClick={(e)=>setPara(data.Taurus)}>
            <img id="rashiimagediv1" src={Img2} alt="error"/>
            <p id="totalrashifaltext">वृषभ</p>
        </div>

        <div className='rashidiv1' onClick={(e)=>setPara(data.Gemini)}>
            <img id="rashiimagediv1"  src={Img3} alt="error"/>
            <p id="totalrashifaltext">मिथुन</p>
        </div>

        <div className='rashidiv1' onClick={(e)=>setPara(data.Cancer)}>
            <img  id="rashiimagediv1" src={Img4} alt="error"/>
            <p id="totalrashifaltext">कर्क</p>
        </div>

        <div className='rashidiv1' onClick={(e)=>setPara(data.Leo)}>
            <img id="rashiimagediv1" src={Img5} alt="error"/>
            <p id="totalrashifaltext">सिंह</p>
        </div>

        <div className='rashidiv1' onClick={(e)=>setPara(data.Virgo)}>
            <img id="rashiimagediv1" src={Img6} alt="error"/>
            <p id="totalrashifaltext">कन्या</p>
        </div>

        <div className='rashidiv1' onClick={(e)=>setPara(data.Libra)}>
            <img id="rashiimagediv1" src={Img7} alt="error"/>
            <p id="totalrashifaltext">तुला</p>
        </div>

        <div className='rashidiv1'onClick={(e)=>setPara(data.Scorpio)}>
            <img id="rashiimagediv1" src={Img8} alt="error"/>
            <p id="totalrashifaltext">वृश्चिक</p>
        </div>

        <div className='rashidiv1' onClick={(e)=>setPara(data.Sagittarius)}>
            <img id="rashiimagediv1" src={Img9} alt="error"/>
            <p id="totalrashifaltext">धनु</p>
        </div>

        <div className='rashidiv1' onClick={(e)=>setPara(data.Capricorn)}>
            <img id="rashiimagediv1" src={Img10} alt="error"/>
            <p id="totalrashifaltext">मकर</p>
        </div>

        <div className='rashidiv1' onClick={(e)=>setPara(data.Aquarius)}>
            <img id="rashiimagediv1" src={Img11} alt="error"/>
            <p id="totalrashifaltext">कुम्भ</p>
        </div>

        <div className='rashidiv1'onClick={(e)=>setPara(data.Pisces)}>
            <img id="rashiimagediv1" src={Img12} alt="error"/>
            <p id="totalrashifaltext">मीन</p>
        </div>
    </div>
            <p id="totalrashifalpara">{para}</p>
        </div>
    </div>
    </div>
  )
}

export default Aajkarashifaal