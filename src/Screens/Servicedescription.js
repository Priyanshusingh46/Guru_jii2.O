import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate,useParams } from 'react-router-dom';
import Header from '../Components/Common/Header'
import Topofservicedes from '../Components/ServiceDescription/Topofservicedes'
import Seconddivofservicedescription from '../Components/ServiceDescription/seconddivofsevicedescription'
import Footer from "../Components/Home/Footer"
function Servicedescription() {

  const [data,setData] = useState(null);
  const [image,setImage] = useState(null);
  const [desc,setDesc] = useState(null);
  const params = useParams();
  useEffect(() => {
    getProductDetails();
  }, [])

  const getProductDetails = async()=>{
    //console.log(params.id)
    let result = await axios.get(`https://subhashishgurujii.onrender.com/services/cards/${params.id}/`)
   // console.log(result.data.heading);
    if(result){
      setData(result.data.heading);
      setImage(result.data.image);
      setDesc(result.data.long_description);
    }
  }
  return (
    <div>
        <Header />
        <Topofservicedes />
        <Seconddivofservicedescription title={data} image={image} desc={desc}/>
        <Footer />
    </div>
  )
}

export default Servicedescription