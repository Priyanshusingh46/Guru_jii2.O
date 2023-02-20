import React from 'react'
import Blogscard from '../Components/Blogs/Blogscard'
import Deignpartofblogs from '../Components/Blogs/Deignpartofblogs'
import Typesofblogs from '../Components/Blogs/Typesofblogs'
import Header from '../Components/Common/Header'

function Blogs() {
  return (
    <div>
    <Header />
    <div>
    <Typesofblogs />
    <Deignpartofblogs />
    <Blogscard />
    </div>
    </div>
  )
}

export default Blogs