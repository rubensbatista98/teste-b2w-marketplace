import React from "react";

import "./style.scss";

const SkillsInfo = ({ skills }) => (
  <section className="skills-info">
    <h2 className="title">Skills</h2>

    {skills.map((skill, index) => (
      <div className="skill" key={index} aria-label="skill">
        <p className="name">{skill.name}</p>

        <div
          className="percentage-bar"
          role="progressbar"
          aria-label="percentage bar"
          aria-valuenow={skill.value.split("%")[0]}
        >
          <span className="percentage" style={{ width: skill.value }}></span>
        </div>
      </div>
    ))}
  </section>
);

export default SkillsInfo;
