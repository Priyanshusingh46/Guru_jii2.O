import React, { useState,useEffect } from 'react'
import axios from "axios";
import achrya from '../../Images/Home/Acharaya.png'
import Info from "../../Css/Home/Infodiv.css"
function InfoGurujii() {

  const[data,setData] = useState(null);
  const[Image, setImage] = useState(null);

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("https://subhashishguruji.onrender.com/home/aboutguruji/");
    setData(result.data[0].description);
    setImage(result.data[0].image);
    /*console.log("about");
    console.log(result.data[0].image);*/
    }
    catch(e){
      console.log(e);
    }
  }






  return (
    <div className='infofirstdiv'>
        <div className='infotextdiv'>
            <h2 id="infotextheading">Subhashish Guru Ji</h2>
            <p id="infotextpara">{data}
<p style={{color:'blue'}}>See more </p>
            </p>
            <div className='bookappoinment'>
              <a href="https://wa.me/+91 9999808651">  <p id="bookappointmentpara">Book appointment</p></a>
            </div>
        </div>

        <div className='infoimagebox'>
            <img id="infoimage" src={Image} alt="error"/>
        </div>
    </div>
  )
}

export default InfoGurujii