import React, { useState } from "react";
import "./Welcome.scss";
import { motion, useMotionValue, useTransform } from "framer-motion";
import sound1 from "../../assets/synth/synth1.mp3";
import sound2 from "../../assets/synth/synth2.mp3";
import sound3 from "../../assets/synth/synth3.mp3";
import sound4 from "../../assets/synth/synth4.mp3";
import sound5 from "../../assets/synth/synth5.mp3";
import sound6 from "../../assets/synth/synth6.mp3";
import sound7 from "../../assets/synth/synth7.mp3";

const Welcome = () => {
  const [acitvateSound, setActivateSound] = useState(false);

  const bassSounds = [sound1, sound2, sound3, sound4, sound5, sound6, sound7];

  const playSound = (index) => {
    const audio = new Audio(bassSounds[index]);
    audio.play();
    setActivateBass(true);

    audio.addEventListener("ended", () => {
      setActivateBass(false);
    });
  };

  // const y = useMotionValue(0)

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
            onClick={() => playSound(0)}
          >
            W
          </motion.h3>
          <motion.h3
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 1200, damping: 5 }}
            onClick={() => playSound(1)}
          >
            e
          </motion.h3>
          <motion.h3
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 1200, damping: 5 }}
            onClick={() => playSound(2)}
          >
            l
          </motion.h3>
          <motion.h3
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 1200, damping: 5 }}
            onClick={() => playSound(3)}
          >
            c
          </motion.h3>
          <motion.h3
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 1200, damping: 5 }}
            onClick={() => playSound(4)}
          >
            o
          </motion.h3>
          <motion.h3
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 1200, damping: 5 }}
            onClick={() => playSound(5)}
          >
            m
          </motion.h3>
          <motion.h3
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 1200, damping: 5 }}
            onClick={() => playSound(6)}
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
