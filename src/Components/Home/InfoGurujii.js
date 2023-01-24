import React from 'react'
import achrya from '../../Images/Home/Acharaya.png'
import Info from "../../Css/Home/Infodiv.css"
function InfoGurujii() {
  return (
    <div className='infofirstdiv'>
        <div className='infotextdiv'>
            <h2 id="infotextheading">Subhashish Guru Ji</h2>
            <p id="infotextpara">
            Acharya (transl. Pedagogy) is a 2022 Indian Telugu-language action drama film[4] written and directed by Koratala Siva. Produced by Konidela Production Company and Matinee Entertainment, the film stars Chiranjeevi as the titular character alongside Ram Charan, Pooja Hegde and Sonu Sood. The film tells the story of Acharya, a Naxalite leader who enters a shrine named Dharmasthali to put an end to the oppression caused
            by a local politician named Basava. Sidda confronts drugs and harassments inside the sanctum.<p style={{color:'blue'}}>See more </p>
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