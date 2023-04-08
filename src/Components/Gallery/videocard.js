import React from "react";
import css from "../../Css/Gallery/Photo.css"
function videocard(props) {
  console.log(props.img);
  return (
    <>
    <div><a href={props.link}> <img id="galleryimage1" src={props.img} alt="error" /> </a>
    </div>
    </>
  );
}

export default videocard;
