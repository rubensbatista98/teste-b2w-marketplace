import React from "react";

import Sidebar from "./components/Sidebar";

import "./App.scss";

const App = () => {
  const infos = {
    image:
      "https://github.com/b2w-marketplace/code-challenge/blob/master/files/avatar-dev.png",
    name: "Brian Walker",
    profession: "Web Developer",
    description:
      "27-year old web developer fromt Colorado Springs with 5+ years of work experience in various fields",

    contact: {
      tel: "123-456-7890",
      cel: "012-345-6789",
      address: "1490 General Woods. Colorado Springs",
      website: "brianwalker.co",
      mail: "mail@brianwalker.co"
    },
    skills: [
      { name: "Front End", value: "80%" },
      { name: "Back End", value: "90%" },
      { name: "Writing", value: "75%" }
    ]
  };

  return (
    <div className="container">
      <Sidebar userInfo={infos} />
    </div>
  );
};

export default App;
