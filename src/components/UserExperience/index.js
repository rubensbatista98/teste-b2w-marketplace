import React from "react";

import "./style.scss";

const UserExperience = ({ title, time, description }) => (
  <article className="user-experience">
    <h3 className="title">{title}</h3>

    <p className="time" aria-label="time in the company">
      {time}
    </p>

    <p className="description">{description}</p>
  </article>
);

export default UserExperience;
