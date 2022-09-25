import React, { useState } from "react";
import "./FeedbackForm.css";
import validate from "validate.js";

const FeedbackForm = () => {
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [phoneErrorMsg, setPhoneErrorMsg] = useState("");

  const constraints = {
    from: {
      email: {
        message: "Please enter a valid e-mail",
      },
    },
  };

  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    const msg = validate({ from: email }, constraints);
    console.log(msg);
    if (msg) {
      setEmailErrorMsg(msg.from[0].slice(5, 32));
    }
  };

  return (
    <div className="whole-form">
      <div className="heading-div">
        <p className="form-heading">Thank you so much for taking the time!</p>
        <p className="sub-heading">Please provide the below details!</p>
      </div>

      <form onSubmit={handleForm} className="main-form" action="">
        <div className="form-input">
          <label className="input-label" htmlFor="">
            First Name:
          </label>
          <div>
            <input
              className="input-area"
              type="text"
              placeholder="First name"
            />
          </div>
        </div>

        <div className="form-input">
          <label className="input-label" htmlFor="">
            Last Name:
          </label>
          <div>
            <input className="input-area" type="text" placeholder="Last name" />
          </div>
        </div>
        <div className="form-input">
          <label className="input-label" htmlFor="">
            Address:
          </label>
          <textarea
            className="input-area"
            name=""
            id=""
            cols="60"
            rows="6"
            placeholder="Enter your full Postal Address"
          ></textarea>
        </div>
        <div className="form-input">
          <label className="input-label" htmlFor="">
            Country:
          </label>
          <div>
            <input className="input-area" type="text" placeholder="India" />
          </div>
        </div>
        <div className="form-input">
          <label className="input-label" htmlFor="">
            Email ID:
          </label>
          <div>
            <input
              className="input-area"
              type="text"
              name="email"
              placeholder="example@sample.com"
            />
            <span className="error-msg">{emailErrorMsg}</span>
          </div>
        </div>

        <div className="form-input">
          <label className="input-label" htmlFor="">
            Phone Number:
          </label>
          <div className="phone-number">
            <input
              className="input-area phone-code"
              type="number"
              placeholder="+91"
            />
            <input
              className="input-area"
              type="number"
              placeholder="123456789"
            />
          </div>
        </div>

        <button className="button">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
