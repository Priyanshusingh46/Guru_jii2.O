import React from 'react'
import Deignpartofblogs from '../Components/Blogs/Deignpartofblogs'
import Typesofblogs from '../Components/Blogs/Typesofblogs'
import Header from "../Components/Common/Header"
import bg from "../Images/Blogs/Bg.png"
import css from "../Css/Blogs/Blogsdescription.css"
import Designofblogdes from '../Components/BlogsDescription/Designofblogdes'
import Footer from "../Components/Home/Footer"
function BlogsDescription() {
  return (
    <div style={{background: "#FFF6E4"}}>
        <Header />
        <Typesofblogs />
        <Deignpartofblogs/>
        <img id="imagebg"src={bg} alt="error"/>
        <Designofblogdes />
        <Footer />
    </div>
  )
}

export default BlogsDescription