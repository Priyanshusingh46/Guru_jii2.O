import React from 'react'
import Header from "../Components/Common/Header.js"
import FirstDiv from '../Components/Product/Page1/fisrstdiv.js'
import SecondDivOfPage1 from '../Components/Product/Page1/seconddivofpage1.js'
import Footer from "../Components/Home/Footer"
function Product_page1() {
  return (
    <div>
        <Header />
        <FirstDiv />
        <SecondDivOfPage1 />
        <Footer />
    </div>
  )
}

export default Product_page1