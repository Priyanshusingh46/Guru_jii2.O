import React, { useState,useEffect } from 'react'
import axios from "axios";
import css from "../../Css/Home/festival.css"
function Festival() {
  const[data,setData] = useState(null);
  const[para, setPara] = useState(null);

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("https://subhashishguruji.onrender.com/home/festival/");
    setData(result.data[0]);
    setPara(result.data[0].january);
   // console.log(result);

    }
    catch(e){
      console.log(e);
    }
   /* console.log("hello");
    console.log(bannerimage);*/
  }

  return (
    <div>
      <div>
        <p id="festival_lika_hua">त्योहार / Festival</p>
        <div className="festivalmonthdiv">
          <div className="festivalmonth">
            <p id="months" onClick={(e)=> setPara(data.january)}>January</p>
            <p id="months"onClick={(e)=> setPara(data.february)}>February</p>
            <p id="months"onClick={(e)=> setPara(data.march)}>March</p>
            <p id="months"onClick={(e)=> setPara(data.april)}>April</p>
            <p id="months"onClick={(e)=> setPara(data.may)}>May</p>
            <p id="months"onClick={(e)=> setPara(data.june)}>June</p>
            <p id="months"onClick={(e)=> setPara(data.july)}>July</p>
            <p id="months"onClick={(e)=> setPara(data.august)}>August</p>
            <p id="months"onClick={(e)=> setPara(data.september)}>September</p>
            <p id="months"onClick={(e)=> setPara(data.october)}>October</p>
            <p id="months"onClick={(e)=> setPara(data.november)}>November</p>
            <p id="months"onClick={(e)=> setPara(data.december)}>December</p>
          </div>
          <div className="festivaldatedescription"> 

          <p id="festivaldatedescriptionpara">{para}
          </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Festival;
