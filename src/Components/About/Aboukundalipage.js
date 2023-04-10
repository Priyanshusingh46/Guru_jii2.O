import React from 'react'
//import image from "../../Images/About/aboutkundali.png"
import css from "../../Css/About/aboutkundali.css"
function Aboukundalipage({title,title1,title2,title3,title4,image,desc,desc1,desc2,desc3,desc4}) {
  return (
    <div className='aboutkundaliouterdiv'>
        <div>
            <p id="kundali_likha_hua">{title}</p>
            <div className="aboutkundali1para">
                <p id="aboutkundalitext1">{desc}</p>
            </div>

            <div className='image1ofaboutkundali'>
              <img id="aboutkundaliimg1" src={image} alt="error"/>
            </div>

            <div className='aboutkundali1para1'>
                <h3 id="description_of_kundali">1. {title1}</h3>
                <p id="aboutkundalitext1">{desc1}</p>


                <h3 id="description_of_kundali">2.  {title2}</h3>
                <p id="aboutkundalitext1">{desc2} </p>


                <h3 id="description_of_kundali">3. {title3}</h3>
                <p id="aboutkundalitext1">{desc3}</p>

                <h3 id="description_of_kundali">4.  {title4}</h3>
                <p id="aboutkundalitext1">{desc4}</p>
            </div>
        </div>
    </div>
  )
}

export default Aboukundalipage
