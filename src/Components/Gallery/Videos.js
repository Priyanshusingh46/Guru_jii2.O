import React, { useState,useEffect } from 'react'
import axios from "axios";
import { NavLink } from "react-router-dom";
import Gallery from "../../Images/Gallery/Gallery.png"
import Video from "../../Images/Gallery/Video.png"
import Design from "../../Images/Common/Design.png"
import Design1 from "../../Images/Home/design.png"
import Design2 from "../../Images/Common/Design1.png"
import Footer from "../../Components/Home/Footer.js"
import imge from "../../Images/Gallery/Image.png";
import css from "../../Css/Gallery/Video.css"
import youtube from "../../Images/Footer/youtube.png"
import VideoCard from "./videocard"
function Videos() {

    const[data,setData] = useState(null);

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("https://subhashishgurujii.onrender.com/gallery/add-video");
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
                    <img id="photovideoimage" src={Gallery} alt="error"/>
                    <p id="photovideopara">Gallery</p>
                </div>
            </NavLink>
            <NavLink to="/galleryVideo">
                <div className='photovideoimagediv1'>
                    <img id="photovideoimage" src={Video} alt="error"/>
                    <p id="photovideopara">Video</p>
                </div>
            </NavLink>
            </div>
    
            <div className='TopDesignDiv'>
            <img id="designImg"src={Design} alt="error"/>
            <img id="designImg1"src={Design1} alt="error"/>
            <p id="paragraph">Video</p>
            <img id="designImg1"src={Design1} alt="error"/>
            <img id="designImg" src={Design2} alt="error"/>
    
            </div>
    
    
            <div className='GallerySection'>
            
            {
          data && data.map((data)=>{
            //console.log("map",data.title);
           return (<VideoCard img={data.video_template} link = {data.video_link}/>)
           
          })
        }

            </div>
    
           <Footer />
        </div>
      )
}

export default Videos