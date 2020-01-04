import React from "react";

import "./style.scss";

const ProfileInfo = ({ description }) => (
  <section className="profile-info">
    <h2 className="title">Profile</h2>
    <p className="description">{description}</p>
  </section>
);

export default ProfileInfo;
