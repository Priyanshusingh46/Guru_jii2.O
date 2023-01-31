import React from "react";
import mundan from "../../Images/Home/mundan.png";
import "../../Css/Home/GurujiiWord.css";
function GurujiiWordCard({heading,para,image}) {
  return (
    <>
     <p id="gurujiiword">Gurujis Words</p>
    <div className="Gurujiiouterdiv">
      <div className="gurujiiimagediv">
        <img id="imagemundan" src={mundan} alt="error" />
      </div>

      <div>
        <h1 id="heading">{heading}</h1>
        <p id="wordspara">{para}</p>
      </div>
    </div>
    </>
  );
}

export default GurujiiWordCard;
