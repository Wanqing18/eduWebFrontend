import React, { useState, useEffect } from "react";
import "./about.css";
import Img1 from "../../assets/background.svg";
import Img2 from "../../assets/main.svg";

const About = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    names();
  }, []);

  const names = async () => {
    const response = await fetch("http://localhost:8080/api/user/DanTheMan", {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    setUser(await response.json());
  };

  return (
    <section className="about_container" id="about">
      <div className="about_title">
        <h1 className="about_section_title">Welcome</h1>
        <h2 className="about_subtitle">to Daniel's Coding Wonderland!</h2>
        <div className="about_button">
          <a href="#about" className="about_button_title">
            Know More About It!
          </a>
          <h1>{user.username}</h1>
        </div>
      </div>
    </section>
  );
};

export default About;
