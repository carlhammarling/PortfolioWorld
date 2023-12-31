import React, { useState } from "react";
import "./Tech.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Tech = ({ navigation }) => {
  const title = ["T", "e", "c", "h"];

  return (
    <div className="tech">
      {/* Title-animation  */}
      <div className="techH2">
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

      <p>
        <span>Here are some</span> of the techniques and tools that I am using.
      </p>

      {/* Card beggining */}
      <div className="techText">
        <div className="techGrid">
          <div className="techItem">
            <div className="iconContainer">
              <i className="fa-brands fa-react fa-2xl"></i>
            </div>
            <p>React</p>
          </div>
          <div className="techItem">
            <div className="iconContainer">
              <i className="fa-brands fa-node fa-2xl"></i>
            </div>
            <p>Node.js</p>
          </div>
          <div className="techItem">
            <div className="iconContainer">
              <i className="fa-brands fa-sass fa-2xl"></i>
            </div>
            <p>SASS</p>
          </div>
          <div className="techItem">
            <img
              src="https://geekflare.com/wp-content/uploads/2023/01/expressjs.png"
              alt=""
            />
            <p>Express.js</p>
          </div>
          <div className="techItem">
            <div className="iconContainer">
              <img
                className="invertImg"
                src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress"
                alt=""
              />
            </div>
            <p>MongoDB</p>
          </div>
          <div className="techItem">
            <div className="iconContainer">
              <img
                className="framerMotion"
                src="https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png"
                alt=""
              />
            </div>
            <p>Motion</p>
          </div>
          <div className="techItem">
            <div className="iconContainer">
              <i class="fa-brands fa-figma fa-2xl"></i>
            </div>
            <p>Figma</p>
          </div>
          <div className="techItem">
            <div className="iconContainer">
              <i class="fa-brands fa-css3-alt fa-2xl"></i>
            </div>
            <p>CSS</p>
          </div>
          <div className="techItem">
            <div className="iconContainer">
              <i class="fa-brands fa-js fa-2xl"></i>
            </div>
            <p>JS6</p>
          </div>
          <div className="techItem">
            <div className="iconContainer">
              <i class="fa-brands fa-html5 fa-2xl"></i>
            </div>
            <p>HTML</p>
          </div>
          <div className="techItem">
            <div className="iconContainer">
              <i class="fa-brands fa-trello fa-2xl"></i>
            </div>
            <p>Trello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
