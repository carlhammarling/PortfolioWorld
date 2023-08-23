import React, { useState } from "react";
import "./Welcome.scss";
import { motion } from "framer-motion";

const Welcome = () => {

  const title = ["W", "e", "l", "c", "o", "m", "e"];

  return (
    <motion.div
      className="welcome"
      drag
      dragSnapToOrigin
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
    >
      <div className="welcomeText">

        {/* Title-animation  */}
        <div className="jumpy">
          {title && title.map((letter) => (
            <motion.h3
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 1200, damping: 5 }}
          >
            {letter}
          </motion.h3>
          ))}
         
        </div>
        <p className="myWorld">To my world</p>
      </div>
    </motion.div>
  );
};

export default Welcome;
