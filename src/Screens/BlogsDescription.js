import React from 'react'
import Deignpartofblogs from '../Components/Blogs/Deignpartofblogs'
import Typesofblogs from '../Components/Blogs/Typesofblogs'
import Header from "../Components/Common/Header"
import bg from "../Images/Blogs/Bg.png"
import css from "../Css/Blogs/Blogsdescription.css"
function BlogsDescription() {
  return (
    <div>
        <Header />
        <Typesofblogs />
        <Deignpartofblogs/>
        <img id="imagebg"src={bg} alt="error"/>
    </div>
  )
}

export default BlogsDescription