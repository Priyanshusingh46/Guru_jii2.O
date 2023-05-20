import React, { useState,useEffect } from 'react'
import axios from "axios";
import image from "../../Images/Home/Resolveproblemimage.png";
import "../../Css/Home/Resolveproblem.css";

function ResolveProblemCard() {

  const[data,setData] = useState(null);
  const[imag,setImage] = useState(null);

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("https://subhashishguruji.onrender.com/home/resolve-problems/");
    setData(result.data[0].description);
    setImage(result.data[0].image);
    //console.log(result.data[0].description);
    }
    catch(e){
      console.log(e);
    }
   /* console.log("hello");
    console.log(bannerimage);*/
  }



  return (
    <div className="resolvefirstdiv">
      <div className="resloveproblemtextdiv">
        <h1 id="resolveheading">Resolve Your Problem With Guru Jii</h1>
        <p id="resolvepara">{data}</p>
        <div className="buttonresolvecall">
        <a href="https://wa.me/+91 9999808651"> <p id="buttontext" >Schedule a call</p> </a>
        </div>
      </div>

      <div className="resolveproblemimagediv">
        <img id="resolveimage" src={imag} alt="error" />
      </div>
    </div>
  );
}

export default ResolveProblemCard;
