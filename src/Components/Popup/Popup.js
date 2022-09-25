import React from "react";
import "./Popup.css";
import dummyWebPage from "../../Images/Rectangle 31.png";

const Popup = ({ setPopUp }) => {
  return (
    <div onClick={() => setPopUp(false)} className="pop-up">
      <img className="dummy-web-page" src={dummyWebPage} alt="" />
    </div>
  );
};

export default Popup;
