import React from 'react'
import Guru from "../../Images/About/Guru.png"
import Gorchar from "../../Images/About/Gorchar.png"
import Horscope from "../../Images/About/Horscope.png"
import Kundali from "../../Images/About/Kundali.png"
import Vedic from "../../Images/About/Vedic.png"
import css from "../../Css/About/aboutheadlines.css"
function AboutHeadlines() {
  return (
    <div className='outerdivofaboutheadlines'>

        <div className='innerdivofaboutheadlines'>
        <img id="aboutheadlineimg" src={Guru} alt="error"/>
        <p id="aboutheadlinespara">Guru Jii</p>
        </div>

        <div className='innerdivofaboutheadlines'>
        <img id="aboutheadlineimg" src={Horscope} alt="error"/>
        <p id="aboutheadlinespara">Horoscope</p>
        </div>

        <div className='innerdivofaboutheadlines'>
        <img id="aboutheadlineimg" src={Kundali} alt="error"/>
        <p id="aboutheadlinespara">Kundali</p>
        </div>

        <div className='innerdivofaboutheadlines'>
        <img id="aboutheadlineimg" src={Gorchar} alt="error"/>
        <p id="aboutheadlinespara">Gorchar</p>
        </div>

        <div className='innerdivofaboutheadlines'>
        <img id="aboutheadlineimg" src={Vedic} alt="error"/>
        <p id="aboutheadlinespara">Vedic Astrology</p>
        </div>
    </div>
  )
}

export default AboutHeadlines