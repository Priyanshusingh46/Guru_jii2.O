import React, { useState,useEffect } from 'react'
import axios from "axios";
import Blogscard from '../Components/Blogs/Blogscard'
import Deignpartofblogs from '../Components/Blogs/Deignpartofblogs'
import Typesofblogs from '../Components/Blogs/Typesofblogs'
import Header from '../Components/Common/Header'
import Footer from "../Components/Home/Footer"
import css from "../Css/Blogs/blogs.css"
function Blogs() {

  const[data,setData] = useState(null);

    useEffect(() => {
      getItems();
    }, [])
  
    const getItems=async()=>{
      try{
      let result = await axios.get("https://subhashishguruji.onrender.com/blogs/blog");
      setData(result.data);
     // console.log(data.title)
      //console.log(result.data[0].id);
      }
      catch(e){
        console.log(e);
      }
     /* console.log("hello");*/
      
    }

  return (
    <div>
    <Header />
    <div className='Blogstopcontainer'>
    {/*<Typesofblogs />*/}
    <Deignpartofblogs />
    <div className='Blogscontainer'>
    {
         
          data && data.map((key,data)=>{
            //console.log("map",key.title);

           return (<Blogscard title={key.title} image={key.image} desc={key.description} id={key.id}/>)
           
          })
        }
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default Blogs

/* https://subhashishgurujii.onrender.com/blogs/blog */