import React from 'react'
import photo from "../../Images/Gallery/Image1.png";
import video from "../../Images/Gallery/video1.png"
import blogs from "../../Css/Home/Blogs.css"
function Blogs() {
  return (
    <div>
        <div>
            <p id="blogstextlikhahua">Blogs Section</p>
        </div>

        <div className='videoandphotoblogssection'>
            <div>
              <img id="videoandphotoblogssection1"src={photo}/>  
            </div>
            <div>
              <img id="videoandphotoblogssection1"src={video}/>  
            </div>
        </div>
    </div>
  )
}

export default Blogs