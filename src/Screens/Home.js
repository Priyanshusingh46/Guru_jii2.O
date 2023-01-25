import React from 'react'
import Header from '../Components/Common/Header'
import DailyUpdate from '../Components/Home/DailyUpdate'
import GuruFirstDiv from '../Components/Home/GuruFirstDiv'
import InfoGurujii from '../Components/Home/InfoGurujii'
import Rashidiv from '../Components/Home/Rashidiv'
import Service from '../Components/Home/Service'
import Solar from '../Components/Home/Solar'

function Home() {
  return (
    <div>
       <Header />
       <GuruFirstDiv />
       {/*<Rashidiv />
       <Solar />
  <InfoGurujii />*/}
      <Service/>
     
    </div>
  )
}

export default Home
 {/*<DailyUpdate />*/}