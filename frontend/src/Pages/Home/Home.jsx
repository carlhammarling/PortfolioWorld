import React, { useEffect, useState } from "react";
import "./home.scss";
import Header from "../../Components/Header/Header";
import world from "../../assets/world.png";
import WorldNav from "../../Components/WorldNav/WorldNav";
import Welcome from "../../Components/Welcome/Welcome";
import About from "../../Components/About/About";

const Home = () => {
  const [navigation, setNavigation] = useState("homeNav");

  useEffect(() => {
    console.log(navigation);
  }, [navigation]);

  return (
    <div className="wrapper">
      <div className="home">
        <Header />
        {navigation === "homeNav" ? (
          <Welcome />
        ) : navigation === "aboutNav" ? (
          <About />
        ) : navigation === "projectsNav" ? (
          <h1>Project</h1>
        ) : navigation === "contactNav" ? (
          <h1>Contact</h1>
        ) : (
          <h1>404</h1>
        )}
      </div>
      <div className="world">
        <WorldNav setNavigation={setNavigation} navigation={navigation} />
      </div>
    </div>
  );
};

export default Home;
