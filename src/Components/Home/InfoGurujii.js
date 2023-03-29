import React, { useState,useEffect } from 'react'
import axios from "axios";
import achrya from '../../Images/Home/Acharaya.png'
import Info from "../../Css/Home/Infodiv.css"
function InfoGurujii() {

  const[data,setData] = useState(null);
  const[Image, setImage] = useState(null);

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("https://subhashishgurujii.onrender.com/home/aboutguruji/");
    setData(result.data[0].description);
    setImage(result.data[0].image);
    /*console.log("about");
    console.log(result.data[0].image);*/
    }
    catch(e){
      console.log(e);
    }
  }






  return (
    <div className='infofirstdiv'>
        <div className='infotextdiv'>
            <h2 id="infotextheading">Subhashish Guru Ji</h2>
            <p id="infotextpara">Acharya (transl. Pedagogy) is a 2022 Indian Telugu-language action drama film[4] written and directed by Koratala Siva. Produced by Konidela Production Company and Matinee Entertainment, the film stars Chiranjeevi as the titular character alongside Ram Charan, Pooja Hegde and Sonu Sood. The film tells the story of Acharya, a Naxalite leader who enters a shrine named Dharmasthali to put an end to the oppression caused by a local politician named Basava. Sidda confronts drugs and harassments inside the sanctum.
<p style={{color:'blue'}}>See more </p>
            </p>
            <div className='bookappoinment'>
                <p id="bookappointmentpara">Book appointment</p>
            </div>
        </div>

        <div className='infoimagebox'>
            <img id="infoimage" src={achrya} alt="error"/>
        </div>
    </div>
  )
}

export default InfoGurujii