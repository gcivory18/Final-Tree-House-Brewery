import React from "react";
import "./ContactPage.css";

// creating the form for the contact us component
const ContactPage = () => {
  return (
    <div className="contactpage ">
      <div className="container">
        <div className="form-container">
          <form>
            <h1>
              <span>Contact Us!</span>
            </h1>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div>
              <label>Message</label>
              <textarea rows="10" placeholder="Enter your thoughts" />
            </div>
            <button>Send it!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
