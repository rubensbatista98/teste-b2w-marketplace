import React from "react";

import UserExperience from "../UserExperience";

import "./style.scss";

const UserExperiences = ({ title, experiences }) => (
  <section className="user-experiences">
    <h2 className="title">{title}</h2>

    {experiences.map(experience => (
      <UserExperience
        title={experience.name}
        time={experience.date}
        description={experience.description}
      />
    ))}
  </section>
);

export default UserExperiences;
