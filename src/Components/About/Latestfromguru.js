import React from 'react'
import Book from "../../Images/About/Book.png";
import css from "../../Css/About/Latestfromguru.css"
function Latestfromguru() {
  return (
    <div>
        <p id="latestfromgurupara">Latest from GuruJii</p>
        <div className='outercontaineroflatestfromguru'>

        <div>
            <img id="latestfromguruimage" src={Book} alt="error"/>
            <div className='latestfromguruview'>
                <p id="Viewdetails">View Details</p>
            </div>
        </div>

        <div>
            <img id="latestfromguruimage" src={Book} alt="error"/>
            <div className='latestfromguruview'>
                <p id="Viewdetails">View Details</p>
            </div>
        </div>


        <div>
            <img id="latestfromguruimage" src={Book} alt="error"/>
            <div className='latestfromguruview'>
                <p id="Viewdetails" >View Details</p>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Latestfromguru