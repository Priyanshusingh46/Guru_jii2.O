import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import photo from "../../Images/Gallery/Image1.png";
import video from "../../Images/Gallery/video1.png"
import blogs from "../../Css/Home/Blogs.css"
function Blogs() {
  const navigate = useNavigate();

  const navigateToBlogs = () => {
    // 👇️ navigate to /blog
    navigate('/blog');
  };
  return (
    <div>
        <div>
            <p id="blogstextlikhahua">Blogs Section</p>
        </div>

        <div className='videoandphotoblogssection'>
            <div onClick={navigateToBlogs} >
              <img id="videoandphotoblogssection1"src={photo}/>  
            </div>
            <div onClick={navigateToBlogs} >
              <img id="videoandphotoblogssection1"src={video}/>  
            </div>
        </div>
    </div>
  )
}

export default Blogs