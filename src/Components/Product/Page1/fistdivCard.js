import React from 'react'
import css from "../../../Css/Product/First_page/card.css"
function fistdivCard({title,number}) {
  console.log(number);
  console.log(title);
  return (
    <div>
        <div className='productfirstdivcardcontainer'>
            <div className='productfirstdivcardtext'>
                <p id="productfirstdivcardtextpara">{title}</p>
            </div>
            <div className='productfirstdivcardnumber'>
                <p id="productfirstdivcardnumberpara">{number}</p>
            </div>
        </div>
    </div>
  )
}

export default fistdivCard