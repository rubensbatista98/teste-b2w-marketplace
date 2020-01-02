import React from "react";

import "./style.scss";

const SidebarHeader = ({ userInfo }) => (
  <header className="sidebar-header">
    <img src={userInfo?.image} alt="" />
    <h1 className="name">{userInfo?.name}</h1>
    <p className="profession">{userInfo?.profession}</p>
  </header>
);

export default SidebarHeader;
