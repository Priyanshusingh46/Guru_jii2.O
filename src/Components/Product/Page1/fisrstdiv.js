import React from 'react'
import FirstDivCard  from './fistdivCard'
import css from "../../../Css/Product/First_page/firstdiv.css"
function fisrstdiv() {
  return (
    <div className='firstdivoutercontainer'>
      <div className='firstdivinnercontainer'>
        <FirstDivCard title="Rudraksh" number={25}/>
        <FirstDivCard title="Ratna" number={9}/>
        <FirstDivCard title="Yantra" number={65}/>
        <FirstDivCard title="Mala" number={20}/>
        <FirstDivCard title="Parad" number={15}/> 
        <FirstDivCard title="Sankh" number={13}/>
        <FirstDivCard title="Piramid" number={13}/>
        <FirstDivCard title="Coins" number={28}/>
        <FirstDivCard title="Books" number={35}/>
        <FirstDivCard title="Feng Shui" number={23}/>
        <FirstDivCard title="Ancient Instruments" number={21}/>
        <FirstDivCard title="Siddha Ganpati" number={14}/>
        <FirstDivCard title="Neelam" number={44}/>
        </div>
    </div>
  )
}

export default fisrstdiv