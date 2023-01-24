import React from 'react'
import service from "../../Css/Home/service.css"
import Design from "../../Images/Home/design.png"
function Service() {
  return (
    <div className='outerservicediv'>
        <div className='designdiv'>
            <img src={Design} alt="error" />
            <p id="servicetext"> Our Services </p>
            <img src={Design} alt="error" />

        </div>
    </div>
  )
}

export default Service