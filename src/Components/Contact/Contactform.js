import React from 'react'
import Design from "../../Images/Common/Design.png"
import Design1 from "../../Images/Home/design.png"
import Design2 from "../../Images/Common/Design1.png"
import css from "../../Css/Contact/Contactform.css"
import call from "../../Images/Footer/phonecall.png"
import location from "../../Images/Footer/location.png"
import email from "../../Images/Footer/email.png"
function Contactform() {
  return (
    <div className='outerdiv'>
        <div className='TopDesignDiv'>
        <img id="designImage4"src={Design} alt="error"/>
        <img id="designImage3"src={Design1} alt="error"/>
        <p id="para2">Get in Touch with us</p>
        <img id="designImage3"src={Design1} alt="error"/>
        <img id="designImage4" src={Design2} alt="error"/>

        </div>

        <div className='formsection'>

            <div className='addresssection'>
                <div className='logopara'>
                    <img id="logo" src ={location} alt="error"/>
                    <p id="para1">Mehandipur Balaji Jyotish peeth, Near Satyawati Collage, Ashok Vihar, New Delhi</p>
                </div>
                <div className='logopara'>
                    <img id="logo" src ={call} alt="error"/>
                    <p id="para1">+91 99998 08651</p>
                </div>
                <div className='logopara'>
                    <img id="logo" src={email} alt="error"/>
                    <p id="para1">jyotishguru1122@gmail.com</p>
                </div>
                <p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8062216902854!2d77.17763211475426!3d28.695442687982407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d034a17e6c8c1%3A0x54dbf89f9bfa963c!2sBalaji%20Jyotish%20Sansthan%20(Delhi)!5e0!3m2!1sen!2sin!4v1675063626246!5m2!1sen!2sin" id= "locationdiv"></iframe>
            </p>
            </div>

            <div className='formpart'>
            <div className='formdiv2'>
            <form>
            <label id="label">
            Enter your Full Name:
            <br></br>
            <input id="formwidth"type="text"  />
            </label>
            <br></br>
            <label id="label">
            Your Mobile No:
            <br></br>
            <input id="formwidth"type="number" minLength="10" maxLength="10"  />
            </label>
            <br></br>
            <label id="label">
            Gender:
            <br></br>
            <input id="formwidth"type="text"  />
            </label>
            <br></br>
            <label id="label">
            Date of Birth:
            <br></br>
            <input id="formwidth"type="text"  />
            </label>
            <br></br>
            <label id="label">
            Place of Birth:
            <br></br>
            <input id="formwidth"type="text"  />
            </label>
            <br></br>
            <label id="label">
            Time Of Birth:
            <br></br>
            <input id="formwidth"type="text"  />
            </label>
            <br></br>

           {/* <label id="label">
            Upload Kundali:
            <br></br>
            <input id="formwidth"type="text"  />
  </label>*/}
            {/*<label id="label">
            upload Your Palm:
            <br></br>
            <input id="formwidth"type="text"  />
</label>*/}
            <label id="label">
             Please Write Your Message:
            <br></br>
            <input id="formwidth1"type="text"  />
            </label>
            <br></br>


            </form>
            </div>

            <div className='button'>
                <p id="text">Submit</p>
            </div>

            </div>

        </div>
    </div>
  )
}

export default Contactform