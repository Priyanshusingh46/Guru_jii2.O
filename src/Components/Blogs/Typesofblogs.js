import React from 'react'
import astro from "../../Images/Blogs/astrology.png"
import nature from "../../Images/Blogs/nature.png"
import political from "../../Images/Blogs/political.png"
import sports from "../../Images/Blogs/sports.png"
import social from "../../Images/Blogs/social.png"
import religious from "../../Images/Blogs/Religious.png"
import css from "../../Css/Blogs/Typesofblog.css"
function Typesofblogs() {
  return (
    <div className='outerdivoftypesofblog'>
        <div className='blogscontainer'>
            <img src={astro} alt="error"/>
            <p id="blogsname">Astrology</p>
        </div>

        <div className='blogscontainer'>
            <img src={nature} alt="error"/>
            <p id="blogsname">Nature</p>
        </div>

        <div className='blogscontainer'>
            <img src={political} alt="error"/>
            <p id="blogsname">Political</p>
        </div>

        <div className='blogscontainer'>
            <img src={sports}alt="error"/>
            <p id="blogsname">Sports</p>
        </div>

        <div className='blogscontainer'>
            <img src={social} alt="error"/>
            <p id="blogsname">Social</p>
        </div>

        <div className='blogscontainer'>
            <img src={religious} alt="error"/>
            <p id="blogsname">Religious</p>
        </div>
    </div>
  )
}

export default Typesofblogs