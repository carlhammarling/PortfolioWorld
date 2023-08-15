import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLogo">
        <p className="logo">
          CARL HAMMARLING
          {/* <i class="fa-solid fa-star fa-xs"></i> FRONTEND DEVELOPER */}
        </p>
        <p className="logo2">FRONTEND DEVELOPER</p>
      </div>
      {/* <div className="headerContact">
        
      </div> */}
    </div>
  );
};

export default Header;
