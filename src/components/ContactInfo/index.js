import React from "react";

import "./style.scss";

const ContactInfo = ({ contact }) => (
  <section className="contact-info">
    <h2 className="title">Contact</h2>
    <address>
      <div className="row">
        <p>{contact?.tel}</p>
        <p>{contact?.cel}</p>
      </div>

      <div className="row">
        <p>{contact?.address}</p>
      </div>

      <div className="row">
        <p>{contact?.website}</p>
        <p>{contact?.mail}</p>
      </div>
    </address>
  </section>
);

export default ContactInfo;
