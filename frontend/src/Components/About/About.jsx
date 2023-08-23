import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profile from "../../assets/PortfolioProfile.png";

const About = ({ navigation }) => {
  const title = ["A", "b", "o", "u", "t"];

  return (
    <div className="about">
      {/* Title-animation */}
      <div className="aboutH2">
        {title &&
          title.map((letter) => (
            <motion.h2
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 1200, damping: 5 }}
            >
              {letter}
            </motion.h2>
          ))}
      </div>

      {/* Card-beggining */}
      <div className="aboutText">
        <div className="aboutPage1">
          <img className="profile" src={profile} alt="" />

          <p>
            <span> Hi! I am Carl</span>, a 34 year old frontend developer who
            has creativity inscripted in my geenes.
          </p>
          <p>
            I have been experimenting with design and music for as long as I can
            remember, and I have a great understanding of signal flows. I really
            love what I am doing!
          </p>
          <Link
            to="https://drive.google.com/file/d/1FEjXzTACq8XHqnlWLHiECFNYrbhHBqTx/view?usp=drive_link"
            target="blank"
          >
            Download CV
          </Link>
        </div>

        <div className="aboutNav">
          <Link to="mailto:carlhammarling@gmail.com" target="blank">
            <motion.i
              class="fa-solid fa-square-envelope"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 1600, damping: 7 }}
            ></motion.i>
          </Link>
          <Link
            to="https://www.linkedin.com/in/carl-hammarling-66b084229/"
            target="blank"
          >
            <motion.i
              class="fa-brands fa-linkedin"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 1600, damping: 7 }}
            ></motion.i>
          </Link>
          <Link to="https://github.com/carlhammarling" target="blank">
            <motion.i
              class="fa-brands fa-square-github"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 1600, damping: 7 }}
            ></motion.i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
