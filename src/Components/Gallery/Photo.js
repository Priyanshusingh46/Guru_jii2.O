import React, { useState,useEffect } from 'react'
import axios from "axios";
import { NavLink } from "react-router-dom";
import Gallery from "../../Images/Gallery/Gallery.png"
import Video from "../../Images/Gallery/Video.png"
import Design from "../../Images/Common/Design.png"
import Design1 from "../../Images/Home/design.png"
import Design2 from "../../Images/Common/Design1.png"
import image from "../../Images/Gallery/Image.png"
import image1 from "../../Images/Gallery/Image1.png"
import Footer from "../../Components/Home/Footer.js"
import css from "../../Css/Gallery/Photo.css"
import PhotoCard from './photocard';
function Photo() {

  const[data,setData] = useState(null);

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("https://subhashishgurujii.onrender.com/gallery/add-photo");
    setData(result.data);
    //console.log(result.data);
    }
    catch(e){
      console.log(e);
    }
   /* console.log("hello");*/
    
  }

  return (
    <div className='Photoouterdiv'>
        <div className='photoVideoDiv'>
          <NavLink to="/galleryPhoto">
            <div className='photovideoimagediv'>
                <img id="photovideoimage1" src={Gallery} alt="error"/>
                <p id="photovideopara1">Gallery</p>
            </div>
            </NavLink>
            <NavLink to="/galleryVideo">
            <div className='photovideoimagediv1'>
                <img id="photovideoimage1" src={Video} alt="error"/>
                <p id="photovideopara1">Video</p>
            </div>
            </NavLink>
        </div>

        <div className='TopDesignDiv'>
        <img id="DesignImage"src={Design} alt="error"/>
        <img id="DesignImage1"src={Design1} alt="error"/>
        <p id="Para">Gallery</p>
        <img id="DesignImage1"src={Design1} alt="error"/>
        <img id="DesignImage" src={Design2} alt="error"/>

        </div>


        <div className='GallerySection'>

        {
          data && data.map((data)=>{
            //console.log("map",data.title);
           return (<PhotoCard img={data.photo}/>)
           
          })
        }
        </div>

        <Footer />
    </div>
  )
}

export default Photo