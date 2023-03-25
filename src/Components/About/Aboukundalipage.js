import React from 'react'
import image from "../../Images/About/aboutkundali.png"
import css from "../../Css/About/aboutkundali.css"
function Aboukundalipage() {
  return (
    <div className='aboutkundaliouterdiv'>
        <div>
            <p id="kundali_likha_hua">Kundali</p>
            <div className="aboutkundali1para">
                <p id="aboutkundalitext1">There are numerous rivers flowing to the vast ocean of astrology. What is being conveyed
                     is that there are different branches of astrology but the Kundli is considered to be 
                     extremely important in Vedic astrology. In Vedic Astrology, when the time, place, date
                      of the horoscope native are fixed then the Janam Kundli of the Jatak is created. 
                      This horoscope will have a complete description of the condition of the planetary
                       direction. On this basis, the forecast or predictions of the person is prepared. 
                       You have asked one of the most important question which a person need 
                    to know before venturing into vedic/Hindu astrology. I will try to answer in the best way possible.
                </p>
            </div>

            <div className='image1ofaboutkundali'>
              <img id="aboutkundaliimg1" src={image} alt="error"/>
            </div>

            <div className='aboutkundali1para1'>
                <h3 id="description_of_kundali">1. Lagna Chart</h3>
                <p id="aboutkundalitext1">This is the snapshot of the sky at the moment you were born. The sign in
                   the first house is the sign that was rising in the east. Each sign gets an
                    equal time of rising in the east which is 2 hours. Position of planet in 
                    various signs and houses is according to their position in heaven when you were born.
                </p>


                <h3 id="description_of_kundali">2.  Chandra Kundli</h3>
                <p id="aboutkundalitext1">This chart is made based on the house where moon is placed. For instance if your
                 moon is placed in 11th house, 12th house would be the second house from moon in this chart. Moon chart is 
                 equally important as is the birth chart since after ascendant, moon is the fastest planet.
                 It changes sign after 2.5 days on an average. Horoscope analysis would be incomplete if you ignore moon chart
                </p>


                <h3 id="description_of_kundali">3.  Navamsa</h3>
                <p id="aboutkundalitext1">Navamsa' is 1/9th division of a sign. It is the most important divisional chart.
                 Position of planets in Lagna chart is seen and then their strength in 'Navamsa' is seen to ascertain their
                  actual strength. If a planet is exalted in the Rasi chart and debilitated in Navamsa, then it loses much 
                  of its strength and vice versa. Navamsa chart is seen as an independent chart. No result 
                is declared before considering the Navamsa chart.It is also seen for match making and to analyse maritial happiness
                </p>

                <h3 id="description_of_kundali">4.  Chalit Chart</h3>
                <p id="aboutkundalitext1">Chalit chart is the chart which shows house position of planets. 
                In Hindu astrology we consider houses/Graha/Sthans in a horoscope where the first house starts 15°
                 before Ascendant and ends 15° after it and it the same is the case with the rest of the eleven house
                 . So sometimes part of sign falls in one house and part in other house. For example if your ascendant
                  is 22° Aries, then first house will start from 7° Aries and will extend till 7° Taurus. If Ketu is at
                   5° Taurus in heaven, is Rasi chart it will fall in second house since Taurus covers 2nd house. But in
                    chalit chart, it will come to 1st house since first house extends till 7°Taurus and Ketu was at 5° 
                  taurus. Chalit chart is the most complex and takes some time to understand.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Aboukundalipage
