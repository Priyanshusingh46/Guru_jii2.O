import React from 'react'
import gurujii from "../../Images/About/gurujii.png"
import css from "../../Css/About/meetgurujii.css"
function MeetGurujii() {
  return (
    <div className='meetgurujiiouterdiv'>
        <div>
            <h2 id="meetgurujiiheading">Meet Gurujii</h2>
        </div>

        <div className='meetgurujiipicture'>
            <div className='cardofgurujiimeet'>
                <img src={gurujii} alt="error" id="meetgurujiiimage" />
                <div>
                    <p id="meetdate">25-27 Nov 2022</p>
                    <div className='gurujiilocation'>
                        <p id="meetlocation">Location</p>
                        <div className='meetregister'>
                            <p id="meetregister">Register</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='cardofgurujiimeet'>
                <img src={gurujii} alt="error" id="meetgurujiiimage" />
                <div>
                    <p id="meetdate" >25-27 Nov 2022</p>
                    <div className='gurujiilocation'>
                        <p id="meetlocation">Location</p>
                        <div className='meetregister'>
                            <p id="meetregister">Register</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='cardofgurujiimeet'>
                <img src={gurujii} alt="error" id="meetgurujiiimage" />
                <div>
                    <p id="meetdate">25-27 Nov 2022</p>
                    <div className='gurujiilocation'>
                        <p id="meetlocation">Location</p>
                        <div className='meetregister'>
                            <p id="meetregister">Register</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default MeetGurujii