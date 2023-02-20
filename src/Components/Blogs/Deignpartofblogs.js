import React from 'react'
import Design from "../../Images/Common/Design.png"
import Design1 from "../../Images/Home/design.png"
import Design2 from "../../Images/Common/Design1.png"
import css from "../../Css/Blogs/desingnpartofblog.css"
function Deignpartofblogs() {
  return (
    <div className='TopDesignDiv'>
        <img id="designImage"src={Design} alt="error"/>
        <img id="designImage1"src={Design1} alt="error"/>
        <p id="para">Blogs</p>
        <img id="designImage1"src={Design1} alt="error"/>
        <img id="designImage" src={Design2} alt="error"/>

    </div>
  )
}

export default Deignpartofblogs