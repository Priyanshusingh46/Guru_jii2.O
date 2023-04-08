import React from 'react'
import css from "../../Css/Gallery/Photo.css"
function photocard(props) {
    //console.log(props.img);
  return (
    <>
        <img id="galleryimage" src={props.img} alt="error"/>
    </>
  )
}

export default photocard