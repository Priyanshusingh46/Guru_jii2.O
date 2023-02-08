import React from 'react'
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
            <div className='photovideoimagediv'>
                <img id="photovideoimage" src={Gallery} alt="error"/>
                <p id="photovideopara">Gallery</p>
            </div>

            <div className='photovideoimagediv1'>
                <img id="photovideoimage" src={Video} alt="error"/>
                <p id="photovideopara">Video</p>
            </div>
        </div>

        <div className='TopDesignDiv'>
        <img id="designImage"src={Design} alt="error"/>
        <img id="designImage1"src={Design1} alt="error"/>
        <p id="para">Gallery</p>
        <img id="designImage1"src={Design1} alt="error"/>
        <img id="designImage" src={Design2} alt="error"/>

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