import React from 'react'
import css from "../../Css/Blogs/blogsdesc.css"
function Designofblogdes({title1, title2,desc1,desc2}) {
  return (
    <div className='blogsdescouterdiv'>
        <div className='BolgsDescriptionPart1'>
            <h3 id="headingofblogdes">{title1}</h3>
            <p id="paragraphofheadingblogdes">{desc1}</p>
        </div>

        <div className='BlogsDescriptionPart2'>
            <h3 id="headingofblogdes" >{title2}</h3>
            <p  id="paragraphofheadingblogdes">{desc2}</p>

        </div>
    </div>
  )
}

export default Designofblogdes