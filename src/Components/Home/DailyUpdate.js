import React from 'react'
import Sunarriscard from './Sunarriscard'
import dailyupdate from "../../Css/Home/dailyupdate.css"
import NewsUpdate from './NewsUpdate'
function DailyUpdate() {
  return (
    <div className='DailyUpdatediv'>
        <div>
          <h2 id="Zodiacheading">Zodiac horoscope Today’s Update</h2>
        </div>
        <div className='sunandnewsdiv'>
        <Sunarriscard />
        <NewsUpdate />
        </div>
    </div>
  )
}

export default DailyUpdate