import React from "react";

import UserExperiences from "../UserExperiences";

import "./style.scss";

const Main = ({ experience, education }) => (
  <main>
    <UserExperiences title="Work Experience" experiences={experience} />
    <UserExperiences title="Education" experiences={education} />
  </main>
);

export default Main;
