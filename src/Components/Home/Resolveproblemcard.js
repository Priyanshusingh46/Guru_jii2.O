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
    let result = await axios.get("https://subhashishgurujii.onrender.com/home/resolve-problems/");
    setData(result.data[0].description);
    setImage(result.data[0].image);
    console.log(result.data[0].description);
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
        <p id="resolvepara">The original purpose of astrology, on the other hand, was to inform the individual. The original purpose of astrology, on the other hand, was to inform the individual</p>
        <div className="buttonresolvecall">
          <p id="buttontext" >Schedule a call</p>
        </div>
      </div>

      <div className="resolveproblemimagediv">
        <img id="resolveimage" src={image} alt="error" />
      </div>
    </div>
  );
}

export default ResolveProblemCard;
