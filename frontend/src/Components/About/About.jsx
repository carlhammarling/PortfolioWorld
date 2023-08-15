import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = ({ navigation }) => {
  return (
    <div className="about" >
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
          t</motion.h2>
      </div>

      <motion.div className="aboutText" drag dragSnapToOrigin dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}>
        <p>
          <span> Hi! I am Carl</span>, a 34 year old frontend developer who has
          creativity inscripted in my geenes.
        </p>

        <p>
          I have been experimenting with design, art and music for as long as I
          can remember, and I really love what I am doing!
        </p>
        <Link to="">SEE MORE</Link>
      </motion.div>
    </div>
  );
};

export default About;