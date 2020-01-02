import React from "react";

import SidebarHeader from "../SidebarHeader";
import SidebarInfos from "../SidebarInfos";

import "./style.scss";

const Sidebar = ({ userInfo }) => (
  <section className="sidebar-page">
    <SidebarHeader userInfo={userInfo} />

    <SidebarInfos userInfo={userInfo} />
  </section>
);

export default Sidebar;
