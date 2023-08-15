import React, { useState } from "react";
import "./Welcome.scss";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Welcome = () => {

  const y = useMotionValue(0)

  return (
    <motion.div className="welcome" drag dragSnapToOrigin dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}>
      <div className="welcomeText">
        {/* <h2 className="greetings">Greetings my friend,</h2> */}
        <p className="name">CARL HAMMARLING - FRONTEND DEVELOPER</p>
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
