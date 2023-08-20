import React from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = ({ navigation }) => {
  return (
    <div className="contact">
      <div className="contactH2">
        <motion.h2
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1200, damping: 5 }}
        >
          C
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
          n
        </motion.h2>
        <motion.h2
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1200, damping: 5 }}
        >
          t
        </motion.h2>
        <motion.h2
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1200, damping: 5 }}
        >
          a
        </motion.h2>
        <motion.h2
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1200, damping: 5 }}
        >
          c
        </motion.h2>
        <motion.h2
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1200, damping: 5 }}
        >
          t
        </motion.h2>
      </div>

      <motion.div
        className="contactText"
        drag
        dragSnapToOrigin
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      >
        <p>
          <span> Hey, lets talk!</span> Please send me a message on any of these medias.
        </p>
        <div className="link">
          <Link to="mailto:carlhammarling@gmail.com" target="blank">
            <motion.i
              className="fa-solid fa-square-envelope"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 1600, damping: 7 }}
            ></motion.i>
          </Link>
          <Link to="mailto:carlhammarling@gmail.com" className="contactInfo">
            carlhammarling@gmail.com
          </Link>
        </div>
        <div className="link">
          <Link
            to="https://www.linkedin.com/in/carl-hammarling-66b084229/"
            target="blank"
          >
            <motion.i
              className="fa-brands fa-linkedin"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 1600, damping: 7 }}
            ></motion.i>
          </Link>
          <Link
            to="https://www.linkedin.com/in/carl-hammarling-66b084229/"
            className="contactInfo"
          >
            Linkedin/CarlHammarling
          </Link>
        </div>
        <div className="link">
          <Link
            to="https://www.linkedin.com/in/carl-hammarling-66b084229/"
            target="blank"
          >
            <motion.i
              className="fa-brands fa-square-whatsapp"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 1600, damping: 7 }}
            ></motion.i>
          </Link>
          <Link
            to="https://wa.me/46793393457"
            className="contactInfo"
          >
            +46793393457
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
