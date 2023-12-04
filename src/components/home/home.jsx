import React, { useState, useEffect } from "react";
import "./home.css";
import Img1 from "../../assets/background.svg";
import Img2 from "../../assets/main.svg";

const Home = () => {
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
    <section className="home_container" id="home">
      <div className="home_title">
        <h1 className="home_section_title">Welcome</h1>
        <h2 className="home_subtitle">to Daniel's Coding Wonderland!</h2>
        <div className="home_button">
          <a href="#about" className="home_button_title">
            Know More About It!
          </a>
          <h1>{user.username}</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
