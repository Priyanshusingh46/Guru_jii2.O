import React, { useState,useEffect } from 'react'
import axios from "axios";
import Book from "../../Images/About/Book.png";
import css from "../../Css/About/Latestfromguru.css"
function Latestfromguru() {

    const[data,setData] = useState(null);
    const[data2,setData2] = useState(null);
    const[data3,setData3] = useState(null);
    const[data4,setData4] = useState(null);
    const[data5,setData5] = useState(null);
    const[data6,setData6] = useState(null);
  
    useEffect(() => {
      getItems();
    }, [])
  
    const getItems=async()=>{
      try{
      let result = await axios.get("https://subhashishgurujii.onrender.com/about/guruji");
      setData(result.data[0].book_image);
      setData2(result.data[0].book_image2);
      setData3(result.data[0].book_image3);
      setData4(result.data[0].book_url);
      setData5(result.data[0].book_url2);
      setData6(result.data[0].book_url3);
      //console.log(result.data[0]);
      }
      catch(e){
        console.log(e);
      }
     /* console.log("hello");
      console.log(bannerimage);*/
    }


  return (
    <div>
        <p id="latestfromgurupara">Latest from GuruJii</p>
        <div className='outercontaineroflatestfromguru'>

        <div>
            <img id="latestfromguruimage" src={data} alt="error"/>
            <div className='latestfromguruview'>
               <a href={data4}> <p id="Viewdetails">View Details</p> </a>
            </div>
        </div>

        <div>
            <img id="latestfromguruimage" src={data2} alt="error"/>
            <div className='latestfromguruview'>
            <a href={data5}>  <p id="Viewdetails">View Details</p></a>
            </div>
        </div>


        <div>
            <img id="latestfromguruimage" src={data3} alt="error"/>
            <div className='latestfromguruview'>
            <a href={data6}>  <p id="Viewdetails" >View Details</p></a>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Latestfromguru