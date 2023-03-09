import React from 'react'
import Blogscard from '../Components/Blogs/Blogscard'
import Deignpartofblogs from '../Components/Blogs/Deignpartofblogs'
import Typesofblogs from '../Components/Blogs/Typesofblogs'
import Header from '../Components/Common/Header'
import Footer from "../Components/Home/Footer"
import css from "../Css/Blogs/blogs.css"
function Blogs() {
  return (
    <div>
    <Header />
    <div className='Blogstopcontainer'>
    <Typesofblogs />
    <Deignpartofblogs />
    <div className='Blogscontainer'>
    <Blogscard />
    <Blogscard />
    <Blogscard />
    <Blogscard />
    <Blogscard />
    <Blogscard />
    <Blogscard />
    <Blogscard />
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default Blogs