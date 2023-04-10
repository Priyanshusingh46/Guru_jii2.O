import React from 'react'
import bg from "../../Images/Blogs/Bg.png"
import share from "../../Images/Blogs/share.png"
import css from "../../Css/Blogs/blogscard.css"
import { Link } from 'react-router-dom'
function Blogscard() {
  return (
    <div className='blogscarddiv'>
        <div style={{backgroundImage: `url(${bg})`,minHeight: "-webkit-fill-available",backgroundPosition: "bottom"}}>
           <div className='descriptionofblogs'>
           <Link to="/blogdescription">  <p id="shareimage"><img id="shareimage"src={share} alt="error" /></p></Link>
            <p id="headingblogs">Blogs: <p id="descriptionofheadingblog">तुलसी पूजन क्यों महत्वपूर्ण है</p></p>
            <p id="descriptionofheadingblog" >श्री हरि विष्णु की परम प्रिय तुलसी जिनके बिना उनका प्रसाद पूर्ण नहीं बनता किंतु वही तुलसी गणेश जी को क्यों नहीं चढ़ाई जाती है-Read more</p>
            </div>
            
        </div>
    </div>
  )
}

export default Blogscard