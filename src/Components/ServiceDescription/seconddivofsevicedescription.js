import React from "react";
import jyotish from "../../Images/servicedescription/jyotish.png";
import css from "../../Css/Servicedescription/seconddivofservice.css"
function seconddivofsevicedescription() {
  return (
    <div className="seconddivofsevicedescriptionouterdiv">
      <div className="seconddivofservice2">
        <div className="seconddivofservice2content">
          <h1 id="seconddivofserviceh1">Jyotish</h1>
          <img id="seconddivofserviceimage" src={jyotish} alt="error" />
          <div className="seconddivofserviceparadiv">
            <p id="seconddivofservicepara">
              The knowledge of Vedic astrology (Jyotish Vidya) was traditionally
              passed down from master to disciple for thousands of years
              ensuring the purity of the teaching. Unfortunately such
              illustrious teachers are rare today and we have to struggle to
              learn from incomplete and/or incorrectly compiled manuscripts. A
              jyotiḥśāstra is a text from a classical body of literature on the
              topic of Hindu astrology, known as Jyotiṣa, dating to the medieval
              period of Classical Sanskrit literature (roughly the 3rd to 9th
              centuries CE) Only the most important ones exist in scholarly
              editions or translations, such as the Yavanajataka (3rd century),
              Brihat Samhitā (6th century), Brihat Parashara Hora Shastra (7th
              century) or Sārāvalī (8th century), while many remain unedited in
              Sanskrit or vernacular manuscripts.Such classical texts should be
              distinguished from modern works. There are a great number of
              contemporary publications, reflecting the persisting importance of
              astrology in Hindu culture, and the corresponding economical
              attractivity of the market in India. Notable modern authors
              include Sri Yukteswar Giri (1855–1936), Bangalore Venkata Raman
              (1912–1998), and Sanjay Rath
            </p>
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
