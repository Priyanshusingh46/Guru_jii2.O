import React from 'react'
import jyotish from  "../../Images/servicedescription/jyotish.png"
import kundali from "../../Images/servicedescription/Kundali.png"
import meditation from "../../Images/servicedescription/meditation.png"
import panchang from "../../Images/servicedescription/panchang.png"
import puja from "../../Images/servicedescription/puja.png"
import rasifal from "../../Images/servicedescription/Rasifal.png"
import Ratna from "../../Images/servicedescription/Ratna.png"
import samadhan from "../../Images/servicedescription/samadhan.png"
import sadhna from "../../Images/servicedescription/sadhna.png"
import Vastu from "../../Images/servicedescription/Vastu.png"
import css from "../../Css/Servicedescription/topofservice.css"
function Topofservicedes() {
  return (
    <div className='topservicedescriptionouterdiv'>
        <div className='topofserviceimagediv'>
            <div className='topserviceimagecard'>
                <img id="topofserviceimg"src={jyotish} alt="error"/>
                <p id="topofservicep" >Jyotish</p>
            </div>

            <div className='topserviceimagecard' >
                <img id="topofserviceimg" src={puja} alt="error"/>
                <p id="topofservicep">Puja Anusthan</p>
            </div>

            <div className='topserviceimagecard' >
                <img id="topofserviceimg" src={Vastu} alt="error"/>
                <p id="topofservicep">Vastu</p>
            </div>

            <div className='topserviceimagecard' >
                <img id="topofserviceimg" src={Ratna} alt="error"/>
                <p id="topofservicep">Ratna Vigyan</p>
            </div>

            <div className='topserviceimagecard' >
                <img id="topofserviceimg"  src={rasifal} alt="error"/>
                <p id="topofservicep">Rasifal</p>
            </div>

            <div className='topserviceimagecard' >
                <img id="topofserviceimg" src={panchang} alt="error"/>
                <p id="topofservicep">Panchang</p>
            </div>

            <div className='topserviceimagecard'>
                <img id="topofserviceimg" src={sadhna} alt="error"/>
                <p id="topofservicep">Sadhna</p>
            </div>

            <div className='topserviceimagecard' >
                <img id="topofserviceimg" src={meditation} alt="error"/>
                <p id="topofservicep">meditation</p>
            </div>

            <div className='topserviceimagecard'>
                <img id="topofserviceimg" src={kundali} alt="error"/>
                <p id="topofservicep">Kundali</p>
            </div>

            <div className='topserviceimagecard'>
                <img id="topofserviceimg" src={samadhan} alt="error"/>
                <p id="topofservicep">Samadhan</p>
            </div>
        </div>
    </div>
  )
}

export default Topofservicedes