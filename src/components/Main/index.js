import React from "react";

import UserExperiences from "../UserExperiences";

import "./style.scss";

const Main = ({ experience, education }) => (
  <main>
    {!!experience.length && (
      <UserExperiences title="Work Experience" experiences={experience} />
    )}

    {!!education.length && (
      <UserExperiences title="Education" experiences={education} />
    )}
  </main>
);

export default Main;
