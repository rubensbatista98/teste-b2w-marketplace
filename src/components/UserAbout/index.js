import React from "react";

const UserAbout = ({ userInfo }) => (
  <section className="user-about">
    <header>
      <img src={userInfo.imageSrc} alt="" />
      <h1>{userInfo.name}</h1>
      <p>{userInfo.profession}</p>
    </header>

    <section>
      <h2>Profile</h2>
      <p>{userInfo.description}</p>

      <h2>Contact</h2>
      <address>
        <p>{userInfo.contact.tel}</p>
        <p>{userInfo.contact.cel}</p>
        <p>{userInfo.contact.address}</p>
        <p>{userInfo.contact.website}</p>
        <p>{userInfo.contact.mail}</p>
      </address>

      <h2>Skills</h2>
      {userInfo.skills.map((skill, index) => (
        <div key={index}>
          <p>{skill.name}</p>
          <p>{skill.value}</p>
        </div>
      ))}
    </section>
  </section>
);

export default UserAbout;
