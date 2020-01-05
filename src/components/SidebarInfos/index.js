import React from "react";

import ProfileInfo from "../ProfileInfo";
import ContactInfo from "../ContactInfo";
import SkillsInfo from "../SkillsInfo";

import "./style.scss";

const SidebarInfos = ({ userInfo }) => (
  <section className="sidebar-infos">
    {!!userInfo.description && (
      <ProfileInfo description={userInfo.description} />
    )}

    {!!userInfo.contact && <ContactInfo contact={userInfo.contact} />}

    {!!userInfo.skills && <SkillsInfo skills={userInfo.skills} />}
  </section>
);

export default SidebarInfos;
