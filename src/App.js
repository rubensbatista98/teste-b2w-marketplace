import React, { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

import fetchData from "./utils/fetchData";

import "./App.scss";

const App = () => {
  const [user, setUser] = useState({});

  const API_URL = "http://www.mocky.io/v2/5a5e38f3330000b0261923a5";

  useEffect(() => {
    getUserInfos();

    async function getUserInfos() {
      const data = await fetchData(API_URL);

      setUser(data.profile);
    }
  }, []);

  return (
    <div className="container">
      <Sidebar userInfo={user} />
      <Main experience={user.experience} education={user.education} />
    </div>
  );
};

export default App;
