import React, { useState,useEffect } from 'react'
import axios from "axios";
import gurujii from "../../Images/About/gurujii.png"
import css from "../../Css/About/meetgurujii.css"
function MeetGurujii() {

    const[data,setData] = useState(null);
    const[data2,setData2] = useState(null);
    const[data3,setData3] = useState(null);
    const[data4,setData4] = useState(null);
    const[data5,setData5] = useState(null);
    const[data6,setData6] = useState(null);
    const[date,setDate] = useState(null);
    const[date2,setDate2] = useState(null);
    const[date3,setDate3] = useState(null);
  
    useEffect(() => {
      getItems();
    }, [])
  
    const getItems=async()=>{
      try{
      let result = await axios.get("https://subhashishguruji.onrender.com/about/guruji");
      setData(result.data[0].meet_guruji_image);
      setData2(result.data[0].meet_guruji_image2);
      setData3(result.data[0].meet_guruji_image3);
      setData4(result.data[0].location1);
      setData5(result.data[0].location2);
      setData6(result.data[0].location3);
      setDate(result.data[0].date1)
      setDate2(result.data[0].date2)
      setDate3(result.data[0].date3)
      //console.log(result.data[0]);
      }
      catch(e){
        console.log(e);
      }
     /* console.log("hello");
      console.log(bannerimage);*/
    }




  return (
    <div className='meetgurujiiouterdiv'>
        <div>
            <h2 id="meetgurujiiheading">Meet Gurujii</h2>
        </div>

        <div className='meetgurujiipicture'>
            <div className='cardofgurujiimeet'>
                <img src={data} alt="error" id="meetgurujiiimage" />
                <div>
                    <p id="meetdate">{date}</p>
                    <div className='gurujiilocation'>
                      <a href={data4}> <p id="meetlocation">Location</p> </a> 
                        <div className='meetregister'>
                            <p id="meetregister">Register</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='cardofgurujiimeet'>
                <img src={data2} alt="error" id="meetgurujiiimage" />
                <div>
                    <p id="meetdate" >{date2}</p>
                    <div className='gurujiilocation'>
                    <a href={data5}>  <p id="meetlocation">Location</p> </a>
                        <div className='meetregister'>
                            <p id="meetregister">Register</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='cardofgurujiimeet'>
                <img src={data3} alt="error" id="meetgurujiiimage" />
                <div>
                    <p id="meetdate">{date3}</p>
                    <div className='gurujiilocation'>
                    <a href={data6}>  <p id="meetlocation">Location</p></a>
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