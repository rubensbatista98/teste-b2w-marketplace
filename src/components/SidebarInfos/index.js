import React from "react";

import ProfileInfo from "../ProfileInfo";
import ContactInfo from "../ContactInfo";
import SkillsInfo from "../SkillsInfo";

import "./style.scss";

const SidebarInfos = ({ userInfo }) => (
  <section className="sidebar-infos">
    <ProfileInfo description={userInfo.description} />

    <ContactInfo contact={userInfo.contact} />

    <SkillsInfo skills={userInfo.skills} />
  </section>
);

export default SidebarInfos;
