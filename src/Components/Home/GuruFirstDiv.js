import React from 'react'
import demoImage from '../../Images/Home/DemoImage.png'
import Home from '../../Css/Home.css'
import chat from "../../Images/Home/chat.png"
function GuruFirstDiv() {
  return (
    <div className='GuruFirstDivOuterBox'>
    <div className='GuruFirstDivBox'>
    <div className='TextPart'>
            <p id="AchrayaTextPart">
            Acharya (transl. Pedagogy) is a 2022 Indian Telugu-language action drama film[4]
            written and directed by Koratala Siva. 
            </p>
            <div className='NormalBox'></div>
    </div>

    <div className='demoImageBox'>
        <img id="demoImage" src={demoImage} alt="error"/>
    </div>
    </div>
    
    <img id="chatImage" src={chat} alt="error" />
    </div>
  )
}

export default GuruFirstDiv