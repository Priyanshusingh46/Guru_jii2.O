import React, { useState,useEffect } from 'react'
import axios from "axios";
import Header from '../Common/Header'
import Design from "../../Images/Common/Design.png"
import Design1 from "../../Images/Common/Design1.png";
import Design2 from "../../Images/Home/design.png";
import css from "../../Css/Service/Services.css"
import card from "../../Images/Card/card1.png"
import CardService from '../Home/Cardservice';
import Footer from '../Home/Footer';
function Service1() {
    const text = "Jyotish"

    const[data,setData] = useState(null);

    useEffect(() => {
      getItems();
    }, [])
  
    const getItems=async()=>{
      try{
      let result = await axios.get("https://subhashishgurujii.onrender.com/services/cards");
      setData(result.data);
      console.log(result.data);
      }
      catch(e){
        console.log(e);
      }
     /* console.log("hello");*/
      
    }




  return (
    <div className="servicepageouterdiv">
    <Header />
    <div className='designpartdiv'>
     <img id="design" src={Design} alt="err" />
     <img id="design1" src={Design2} alt="err" />
     <h2 id="textservice">Our Services</h2>
     <img id="design1" src={Design2} alt="err" />
     <img id="design" src={Design1} alt="err" />
     </div>
     <div className='carddiv'>
      
     {
          data && data.map((data)=>{
            //console.log("map",data.title);
           return (<CardService image={data.image} title={data.heading} desc={data.description} id={data.id}/>)
           
          })
        }


     </div>
     <h3 id="otherservice">Other Services</h3>

     <div className='carddiv'>
     {
          data && data.map((data)=>{
            //console.log("map",data.title);
           return (<CardService image={data.image} title={data.heading} desc={data.description} id={data.id}/>)
           
          })
    }
     </div>

     <Footer />

    </div>
    
  )
}

export default Service1

/*
       */