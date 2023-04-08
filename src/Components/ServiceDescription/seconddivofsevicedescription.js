import React from "react";
import jyotish from "../../Images/servicedescription/jyotish.png";
import css from "../../Css/Servicedescription/seconddivofservice.css"
function seconddivofsevicedescription(props) {
  //console.log(props.title);
  return (
    <div className="seconddivofsevicedescriptionouterdiv">
      <div className="seconddivofservice2">
        <div className="seconddivofservice2content">
          <div className="headingandimageofservicedescription">
          <h1 id="seconddivofserviceh1">{props.title}</h1>
          <img id="seconddivofserviceimage" src={props.image} alt="error" />
          </div>
          <div className="seconddivofserviceparadiv">
            <p id="seconddivofservicepara">{props.desc}</p>
          </div>
        </div>

        <div className="formseconddiv">
          <form>
            <label id="labelpara">
              Enter Your Full Name:
              <br></br>
              <input id="inputbox" type="text" name="name" />
            </label>
            <br></br>

            <label id="labelpara" >
              Your Mobile No:
              <br></br>
              <input id="inputbox" type="text" name="name" />
            </label>
            <br></br>

            <label id="labelpara" >
              Gender:
              <br></br>
              <input id="inputbox" type="text" name="name" />
            </label>
            <br></br>

            <label id="labelpara" >
              Date Of Birth:
              <br></br>
              <input id="inputbox" type="text" name="name" />
            </label>
            <br></br>

            <label id="labelpara" >
              Place of Birth:
              <br></br>
              <input id="inputbox" type="text" name="name" />
            </label>
            <br></br>

            <label id="labelpara" >
              Time of Birth:
              <br></br>
              <input id="inputbox" type="text" name="name" />
            </label>
            <br></br>


            <label id="labelpara" >
              Upload Kundli:
              <br></br>
              <input id="inputbox" type="text" name="name" />
            </label>
            <br></br>


            <label id="labelpara">
              Upload Your Palm:
              <br></br>
              <input id="inputbox" type="text" name="name" />
            </label>
            <br></br>

            <label id="labelpara">
              Please write your message:
              <br></br>
              <input id="inputbox1" type="text" name="name" />
            </label>
            <br></br>
                <div className="seconddivbuttonclassouterdiv">
                <div className="seconddivbuttonclass">
                  <p id="seconddivbuttonclasspara">Submit</p>
                </div>
                </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default seconddivofsevicedescription;
