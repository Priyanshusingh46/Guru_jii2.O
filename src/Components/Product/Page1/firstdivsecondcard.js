import React from 'react'
import image from "../../../Images/Product/cardimage.png";
import css from "../../../Css/Product/First_page/secondcard.css"
function firstdivsecondcard() {
  return (
    <div className='firstdivsecondcardouterdiv'>
        <div className='cardItemsdiv'>
          <div className='firstdivsecondcardimagedivcontainer'>
            <img src={image} id="firstdivsecondcardimage" alt="error"/>
            </div>
            <div className='firstdivsecondcardimagetextandcost'>
            <p id="firstdivsecondcardimagetextandcosttext">Rudraksh</p>
            </div>
            <div className='productsectionviewdetails'>
                <p id="productsectionviewdetailspara">Ask Details</p>
            </div>
        </div>
    </div>
  )
}

export default firstdivsecondcard