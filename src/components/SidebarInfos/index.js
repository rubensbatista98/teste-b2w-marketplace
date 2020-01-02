import React from "react";

import "./style.scss";

const SidebarInfos = ({ userInfo }) => (
  <section className="sidebar-infos">
    <h2 className="title">Profile</h2>

    <p className="description">{userInfo?.description}</p>

    <h2 className="title">Contact</h2>

    <address>
      <div className="row">
        <p>{userInfo?.contact?.tel}</p>
        <p>{userInfo?.contact?.cel}</p>
      </div>

      <div className="row">
        <p>{userInfo?.contact?.address}</p>
      </div>

      <div className="row">
        <p>{userInfo?.contact?.website}</p>
        <p>{userInfo?.contact?.mail}</p>
      </div>
    </address>

    <h2 className="title">Skills</h2>

    {userInfo?.skills.map((skill, index) => (
      <div className="skill" key={index} aria-label="skill">
        <p>{skill.name}</p>

        <span
          aria-label="Percentage Bar"
          aria-valuenow={skill.value.split("%")[0]}
          data-value={skill.value}
        ></span>
      </div>
    ))}
  </section>
);

export default SidebarInfos;
