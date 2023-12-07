import React, { useState } from "react";
import "./loginRegister.css";

const LoginRegister = () => {
  const [signIn, toggle] = React.useState(""); // want react to remeber singIn, signIn's initial value is true
  // https://react.dev/learn/state-a-components-memory#meet-your-first-hook
  return (
    <div className={`Register_container ${signIn}`} id="Register_container">
      <div className="form-container signUp_Container">
        <form action="#">
          <div className="title">Create Acoount</div>
          <input label="UserName" type="text" placeholder="UserName" />
          <input
            label="Email Address"
            type="email"
            paceholder="example@gamil.com"
          />
          <input
            label="Date of Birth"
            type="date"
            placeholder="Date of Birth"
          />
          <input label="Password" type="password" placeholder="Password" />
          <input
            label="Comfirm Password"
            type="password"
            placeholder="ComfirmPassword"
          />
          <input label="Role" type="Role" placeholder="role" />
          <button className="SignUp_button">Sign up</button>
        </form>
      </div>

      <div className="form-container logIn_Container">
        <form action="#">
          <div className="title">Sign In</div>
          <input label="UserName" type="text" placeholder="UserName" />
          <input label="Password" type="password" placeholder="******" />
          <a href="#">Forgot your password?</a>
          <button className="SignIn_button">Sign In</button>
        </form>
      </div>

      <div className="Overlay_Container">
        <div className="Overlay">
          <div className="LeftOverLayPanel">
            <div className="title">Welcome Back!</div>
            <div className="descrptions">
              To keep connected with us please login with your personal info
            </div>
            <button
              className="SignIn_button"
              id="signIn"
              onClick={() => toggle("")}
            >
              Sign In
            </button>
          </div>
          <div className="RightOverLayPanel">
            <div className="title">Hello, Friend!</div>
            <div className="descrptions">
              Enter Your Personal details And Start Journey with us!
            </div>
            <button
              className="SignUp_button"
              id="signUp"
              onClick={() => toggle("right-panel-active")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginRegister;
