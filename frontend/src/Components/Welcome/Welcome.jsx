import React, { useState } from "react";
import "./Welcome.scss";
import { motion } from "framer-motion";


const Welcome = () => {
 

  return (
    <motion.div
      className="welcome"
      drag
      dragSnapToOrigin
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
    >
      <div className="welcomeText">
        <div className="jumpy">
          <motion.h3
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 1200, damping: 5 }}
          >
            W
          </motion.h3>
          <motion.h3
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 1200, damping: 5 }}
          >
            e
          </motion.h3>
          <motion.h3
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 1200, damping: 5 }}
          >
            l
          </motion.h3>
          <motion.h3
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 1200, damping: 5 }}
          >
            c
          </motion.h3>
          <motion.h3
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 1200, damping: 5 }}
          >
            o
          </motion.h3>
          <motion.h3
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 1200, damping: 5 }}
          >
            m
          </motion.h3>
          <motion.h3
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 1200, damping: 5 }}
          >
            e
          </motion.h3>
        </div>
        <p className="myWorld">To my world</p>
      </div>
    </motion.div>
  );
};

export default Welcome;
