import React from "react";
import "./About.scss";
import { Link } from 'react-router-dom'

const About = ({ navigation }) => {
  return (
    <div className="about">
      <h2>About me</h2>
      <div className="aboutText">
        <p>
          <span> Hi! I am Carl</span>, a 34 year old frontend developer who has
          creativity inscripted in my geenes.
        </p>

        <p>
          I have been experimenting with design, art and music for as long as I
          can remember, and I really love what I am doing!
        </p>
        <Link to=''>SEE MORE</Link>
      </div>
    </div>
  );
};

export default About;
