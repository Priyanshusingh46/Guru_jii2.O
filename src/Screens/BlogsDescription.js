import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate,useParams } from 'react-router-dom';
import Deignpartofblogs from '../Components/Blogs/Deignpartofblogs'
import Typesofblogs from '../Components/Blogs/Typesofblogs'
import Header from "../Components/Common/Header"
import bg from "../Images/Blogs/Bg.png"
import css from "../Css/Blogs/Blogsdescription.css"
import Designofblogdes from '../Components/BlogsDescription/Designofblogdes'
import Footer from "../Components/Home/Footer"
function BlogsDescription() {

  const [title1,setTitle1] = useState(null);
  const [title2,setTitle2] = useState(null);
  const [desc1,setDesc1] = useState(null);
  const [image,setImage] = useState(null);
  const [desc2,setDesc2] = useState(null);
  const params = useParams();
  useEffect(() => {
    getProductDetails();
  }, [])

  const getProductDetails = async()=>{
    let result = await axios.get(`https://subhashishgurujii.onrender.com/blogs/blog/${params.id}`)
    if(result){
      setTitle1(result.data.title1);
      setImage(result.data.image);
      setDesc1(result.data.long_description1);
      setTitle2(result.data.title2);
      setDesc2(result.data.long_description2);
      //console.log(result.data);
    }
  }

  return (
    <div style={{background: "#FFF6E4"}}>
        <Header />
        {/*<Typesofblogs />*/}
        <Deignpartofblogs/>
        <img id="imagebg"src={image} alt="error"/>
        <Designofblogdes title1={title1} title2={title2} desc1={desc1} desc2={desc2}/>
        <Footer />
    </div>
  )
}

export default BlogsDescription