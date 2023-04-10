import React from 'react'
import bg from "../../Images/Blogs/Bg.png"
import share from "../../Images/Blogs/share.png"
import css from "../../Css/Blogs/blogscard.css"
import { Link } from 'react-router-dom'
function Blogscard({image,desc,title,id}) {
  //console.log(id);
  return (
    <div className='blogscarddiv'>
        <div style={{backgroundImage: `url(${image})`,minHeight: "-webkit-fill-available",backgroundPosition: "bottom"}}>
           <div className='descriptionofblogs'>
             <p id="shareimage"><img id="shareimage"src={share} alt="error" /></p>
            <p id="headingblogs">Blogs: <p id="descriptionofheadingblog">{title}</p></p>
            <Link to={"/blogdescription/"+id}><p id="descriptionofheadingblog" >{desc}-Read more</p></Link>
            </div>
            
        </div>
    </div>
  )
}

export default Blogscard