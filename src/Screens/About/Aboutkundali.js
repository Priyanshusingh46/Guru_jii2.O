import React, { useState,useEffect } from 'react'
import axios from "axios";
import Header from '../../Components/Common/Header'
import AboutHeadlines from "../../Components/About/AboutHeadlines";
import AboutKundalipage from '../../Components/About/Aboukundalipage';
import Footer from "../../Components/Home/Footer"
function Aboutkundali() {
  const[title,setTitle] = useState(null);
  const[title1,setTitle1] = useState(null);
  const[title2,setTitle2] = useState(null);
  const[title3,setTitle3] = useState(null);
  const[title4,setTitle4] = useState(null);
  const[image,setImage] = useState(null);

    const[desc,setDesc]= useState(null);
    const[desc1,setDesc1]= useState(null);
    const[desc2,setDesc2]= useState(null);
    const[desc3,setDesc3]= useState(null);
    const[desc4,setDesc4]= useState(null);

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("https://subhashishgurujii.onrender.com/about/kundli");
    setTitle(result.data[0].title);
    setTitle1(result.data[0].title1);
    setTitle2(result.data[0].title2);
    setTitle3(result.data[0].title3);
    setTitle4(result.data[0].title4);
    setImage(result.data[0].image);
      setDesc(result.data[0].description);
      setDesc1(result.data[0].description1);
      setDesc2(result.data[0].description2);
      setDesc3(result.data[0].description3);
      setDesc4(result.data[0].description4);
     // console.log(result.data[0].title);

    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <div>
        <Header />
        <div style={{background: "#FFF6E4"}}>
        <AboutHeadlines />
        <AboutKundalipage title={title} title1={title1} title2={title2} title3={title3} title4={title4}
    image={image} desc={desc} desc1={desc1} desc2={desc2} desc3={desc3} desc4={desc4}
    />
        <Footer />
        </div>
       
    </div>
  )
}

export default Aboutkundali