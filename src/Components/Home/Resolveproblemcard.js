import React from "react";
import image from "../../Images/Home/Resolveproblemimage.png";
import "../../Css/Home/Resolveproblem.css";

function ResolveProblemCard() {
  return (
    <div className="resolvefirstdiv">
      <div className="resloveproblemtextdiv">
        <h1 id="resolveheading">Resolve Your Problem With Guru Jii</h1>
        <p id="resolvepara">
          The original purpose of astrology, on the other hand, was to inform
          the individual
        </p>
        <p id="resolvepara">
          The original purpose of astrology, on the other hand, was to inform
          the individual
        </p>
        <p id="resolvepara">
          The original purpose of astrology, on the other hand, was to inform
          the individual
        </p>
        <div className="buttonresolvecall">
          <p id="buttontext" >Schedule a call</p>
        </div>
      </div>

      <div className="resolveproblemimagediv">
        <img id="resolveimage" src={image} alt="error" />
      </div>
    </div>
  );
}

export default ResolveProblemCard;
