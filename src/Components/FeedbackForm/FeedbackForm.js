import React from "react";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  return (
    <div className="whole-form">
      <div className="heading-div">
        <p className="form-heading">Thank you so much for taking the time!</p>
        <p className="sub-heading">Please provide the below details!</p>
      </div>

      <form className="main-form" action="">
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
              type="email"
              placeholder="example@sample.com"
            />
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
