import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AboutPage1 from "./AboutPage1/AboutPage1";

const About = ({ navigation }) => {
  return (
    <div className="about">
      <div className="aboutH2">
        <motion.h2
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1200, damping: 5 }}
        >
          A
        </motion.h2>
        <motion.h2
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1200, damping: 5 }}
        >
          b
        </motion.h2>
        <motion.h2
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1200, damping: 5 }}
        >
          o
        </motion.h2>
        <motion.h2
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1200, damping: 5 }}
        >
          u
        </motion.h2>
        <motion.h2
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1200, damping: 5 }}
        >
          t
        </motion.h2>
      </div>

      <motion.div
        className="aboutText"
        drag
        dragSnapToOrigin
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      >
        <AboutPage1 />

        {/* <Link to="">SEE MORE</Link> */}
        <div className="aboutNav">
          <Link to="mailto:carlhammarling@gmail.com" target="blank">
            <motion.i
              class="fa-solid fa-square-envelope"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 1600, damping: 7 }}
            ></motion.i>
          </Link>
          <Link to="https://www.linkedin.com/in/carl-hammarling-66b084229/" target="blank">
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
      </motion.div>
    </div>
  );
};

export default About;
