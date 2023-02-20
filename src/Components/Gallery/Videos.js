import React from 'react'
import { NavLink } from "react-router-dom";
import Gallery from "../../Images/Gallery/Gallery.png"
import Video from "../../Images/Gallery/Video.png"
import Design from "../../Images/Common/Design.png"
import Design1 from "../../Images/Home/design.png"
import Design2 from "../../Images/Common/Design1.png"
import Footer from "../../Components/Home/Footer.js"
import css from "../../Css/Gallery/Video.css"
import youtube from "../../Images/Footer/youtube.png"

function Videos() {
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
            <img id="designimage"src={Design} alt="error"/>
            <img id="designimage1"src={Design1} alt="error"/>
            <p id="paragraph">Video</p>
            <img id="designimage1"src={Design1} alt="error"/>
            <img id="designimage" src={Design2} alt="error"/>
    
            </div>
    
    
            <div className='GallerySection'>

                <div className='divforvideo'>
                    <div className='youtubeimagediv'>
                    <img id="youtubeimage"src={youtube} alt="error"/>
                    </div>
                   
                </div>
                <div className='divforvideo1'>
                <div className='youtubeimagediv'>
                    <img id="youtubeimage"src={youtube} alt="error"/>
                    </div>
                </div>

                <div className='divforvideo'>
                <div className='youtubeimagediv'>
                    <img id="youtubeimage"src={youtube} alt="error"/>
                    </div>
                </div>
                <div className='divforvideo1'>
                <div className='youtubeimagediv'>
                    <img id="youtubeimage"src={youtube} alt="error"/>
                    </div>
                </div>

                <div className='divforvideo'>
                <div className='youtubeimagediv'>
                    <img id="youtubeimage"src={youtube} alt="error"/>
                    </div>
                </div>
                <div className='divforvideo1'>
                <div className='youtubeimagediv'>
                    <img id="youtubeimage"src={youtube} alt="error"/>
                    </div>
                </div>

                <div className='divforvideo'>
                <div className='youtubeimagediv'>
                    <img id="youtubeimage"src={youtube} alt="error"/>
                    </div>
                </div>
                <div className='divforvideo1'>
                <div className='youtubeimagediv'>
                    <img id="youtubeimage"src={youtube} alt="error"/>
                    </div>
                </div>

                <div className='divforvideo'>
                <div className='youtubeimagediv'>
                    <img id="youtubeimage"src={youtube} alt="error"/>
                    </div>
                </div>
                <div className='divforvideo1'>
                <div className='youtubeimagediv'>
                    <img id="youtubeimage"src={youtube} alt="error"/>
                    </div>
                </div>
                <div className='divforvideo'>
                <div className='youtubeimagediv'>
                    <img id="youtubeimage"src={youtube} alt="error"/>
                    </div>
                </div>
                <div className='divforvideo1'>
                <div className='youtubeimagediv'>
                    <img id="youtubeimage"src={youtube} alt="error"/>
                    </div>
                </div>
                <div className='divforvideo'>
                <div className='youtubeimagediv'>
                    <img id="youtubeimage"src={youtube} alt="error"/>
                    </div>
                </div>
                <div className='divforvideo1'>
                <div className='youtubeimagediv'>
                    <img id="youtubeimage"src={youtube} alt="error"/>
                    </div>
                </div>

                <div className='divforvideo'>
                <div className='youtubeimagediv'>
                    <img id="youtubeimage"src={youtube} alt="error"/>
                    </div>
                </div>
                <div className='divforvideo1'>
                <div className='youtubeimagediv'>
                    <img id="youtubeimage"src={youtube} alt="error"/>
                    </div>
                </div>

            </div>
    
           <Footer />
        </div>
      )
}

export default Videos