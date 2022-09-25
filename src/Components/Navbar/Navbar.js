import React from "react";
import people from "../../Images/4..png";
import table from "../../Images/table-cells-large-solid.svg";
import list from "../../Images/list-ul-solid.svg";
import "./Navbar.css";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import { useState } from "react";

const Navbar = ({ listView, setListView, gridView, setGridView }) => {
  const [formView, setFormView] = useState(false);

  const handleShowForm = () => {
    setFormView(!formView);
  };

  const handleListView = () => {
    setListView(true);
    setGridView(false);
  };

  const handleGridView = () => {
    setListView(false);
    setGridView(true);
  };

  return (
    <section className="whole-navbar">
      <nav className="navbar">
        <div className="user">
          <img src={people} alt="" />
          <div>
            <p className="name">Hi Reader,</p>
            <p>Here's your News!</p>
          </div>
        </div>

        {formView || (
          <div className="view-toggle">
            <p>View Toggle</p>
            <div className="view-box">
              <div
                onClick={handleGridView}
                className={gridView && "active-view"}
              >
                <img src={table} alt="" />
              </div>
              <div
                onClick={handleListView}
                className={listView && "active-view"}
              >
                <img src={list} alt="" />
              </div>
            </div>
          </div>
        )}

        <div className="feedback">
          <p className="feedback-heading">Have a Feedback?</p>
          <div
            onClick={handleShowForm}
            className={formView ? "form-button-red" : "form-button"}
          >
            <p>We're Listening!</p>
          </div>
        </div>
      </nav>

      {formView && <FeedbackForm></FeedbackForm>}
    </section>
  );
};

export default Navbar;
