import React from "react";

function Form() {

  return (
    <form className="form">
      <label className="form__label" htmlFor="first-name">First Name</label>
      <input className="form__input" type="text" name="first-name" id="first-name" />

      <label className="form__label" htmlFor="last-name">Last Name</label>
      <input className="form__input" type="text" name="last-name" id="last-name" />

      <label className="form__label" htmlFor="contact-number">Contact Number</label>
      <input className="form__input" type="tel" name="contact-number" id="contact-number" />

      <label className="form__label" htmlFor="email">Email Address</label>
      <input className="form__input" type="text" name="email" id="email" />

      <label className="form__label" htmlFor="message">Message</label>
      <textArea className="form__input" col="15" rows="5" name="message" id="message"></textArea>
      <button className="form__submit button-primary" type="submit">Send</button>
    </form>
  );
}

export default Form;