import React from "react";
import "./getStart.css";
import img from "../../assets/footer.svg";
import img2 from "../../assets/footer_illustr-bg.svg";

const GetStart = () => {
  return (
    <div className="getStart_container">
      <div className="getStart_descriptions">
        We want our student be happy and enjoy learning coding!
      </div>

      <div className="getStart_button">
        <button>Get Start Now!</button>
      </div>

      <div className="getStart_img">
        <img src={img} alt="" className="footer_img" />
        <img src={img2} alt="" className="footer_img2" />
      </div>
    </div>
  );
};
export default GetStart;
