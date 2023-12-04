import React from "react";
import "./header.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  // let tl=gsap.timeline();
  return (
    <header className="header" id="header">
      <nav className="header_container">
        <a href="#home" className="nav_logo">
          <img src={logo} alt="" className="logo_img" />
        </a>
        <div className="nav_menu" id="nav-menu">
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#Home" className="nav_link active-link">
                Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#About" className="nav_link">
                About
              </a>
            </li>
            <li className="nav_item">
              <a href="#Program" className="nav_link">
                Program
              </a>
            </li>

            <li className="nav_item">
              <a href="#Reviews" className="nav_link">
                Reviews
              </a>
            </li>
          </ul>
        </div>

        <div className="nav_btns">
          <div className="nav_toggle">
            <i className="uil uil-bars"></i>
          </div>

          <button className="btn_signIn">Sign In</button>
        </div>
        {/* function header_raise(){
          tl.from("nav_list,nav_btns,btn_signIn",
          (
            x:-30,
              opacity:0,
            stagger:0.2,
          ))
        }; */}
        {/* header_raise() */}
      </nav>
    </header>
  );
};

export default Header;
