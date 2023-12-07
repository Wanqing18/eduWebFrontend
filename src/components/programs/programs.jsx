import React from "react";
import "./programs.css";
import img from "../../assets/section2.svg";

const Programs = () => {
  return (
    <section className="programs_container">
      <div className="programs_imgs">
        <img src={img} alt="" className="pro_img" />
      </div>

      <div className="programs_descriptions">
        <h1 className="programs_title">Syllabus Of Courses</h1>
        <div className="courses">
          <div className="order">
            <h3>01</h3>
          </div>
          <div className="content">
            <h2 className="subtitle1">Videos from professional</h2>
            <p className="des1">
              Our speicialists will help you create ang website. With our help,
              you can handle any taks, also you get a professional consultation.
            </p>
          </div>
        </div>

        <div className="courses">
          <div className="order">
            <h3>02</h3>
          </div>
          <div className="content">
            <h2 className="subtitle2">Practical Independent Work</h2>
            <p className="des2">
              Learn how to organize your website, create engaging content,
              protect your site, and achieve search engine rankings.
            </p>
          </div>
        </div>

        <div className="courses">
          <div className="order">
            <h3>03</h3>
          </div>
          <div className="content">
            <h2 className="subtitle3">Videos from professional</h2>
            <p className="des3">
              Our speicialists will help you create ang website. With our help,
              you can handle any taks, also you get a professional consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
