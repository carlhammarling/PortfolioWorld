import React from "react";
import "./AboutPage1.scss";
import profile from "../../../assets/PortfolioProfile.png";
import { Link } from "react-router-dom";

const AboutPage1 = () => {
  return (
    <div className="aboutPage1">
      <img className="profile" src={profile} alt="" />

      <p>
        <span> Hi! I am Carl</span>, a 34 year old frontend developer who has
        creativity inscripted in my geenes.
      </p>
      <p>
        I have been experimenting with design and music for as long as I
        can remember, and I have a great understanding of signal flows. I really love what I am doing!
      </p>
      <Link to="https://drive.google.com/file/d/1942HjMYhScKtW_kCjAY54XpytuTTGkrb/view?usp=drive_link" target="blank">Download CV</Link>
    </div>
  );
};

export default AboutPage1;
