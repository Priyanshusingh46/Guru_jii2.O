import React, { useState,useEffect } from 'react'
import axios from "axios";
import newsdiv from "../../Css/Home/newsupdate.css"
function NewsUpdate() {
  const[data,setData] = useState(null);

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("https://subhashishgurujii.onrender.com/home/todays-update/");
    setData(result.data[0].todays_update);
    }
    catch(e){
      console.log(e);
    }
   /* console.log("hello");
    console.log(bannerimage);*/
  }
  return (
    <div className='newsupdateouterdiv'>
        <p id="newsupdateheading">Today’s Update</p>
        <p id="newsupdatepara">{data}
        </p>
    </div>
  )
}

export default NewsUpdate