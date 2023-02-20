import React from 'react'
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
function Photo() {
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
          <img id="galleryimage" src={image1} alt="error"/>
          <img id="galleryimage" src={image} alt="error"/>
          <img id="galleryimage" src={image1} alt="error"/>
          <img id="galleryimage" src={image} alt="error"/>
          <img id="galleryimage" src={image1} alt="error"/>
          <img id="galleryimage" src={image} alt="error"/>
          <img id="galleryimage" src={image1} alt="error"/>
          <img id="galleryimage" src={image} alt="error"/>
          <img id="galleryimage" src={image1} alt="error"/>
          <img id="galleryimage" src={image} alt="error"/>
          <img id="galleryimage" src={image1} alt="error"/>
          <img id="galleryimage" src={image} alt="error"/>
          <img id="galleryimage" src={image1} alt="error"/>
          <img id="galleryimage" src={image} alt="error"/>
          <img id="galleryimage" src={image1} alt="error"/>
        </div>

        <Footer />
    </div>
  )
}

export default Photo