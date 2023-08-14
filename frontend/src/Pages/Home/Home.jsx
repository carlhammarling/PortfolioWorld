import React from "react";
import "./home.scss";
import Header from "../../Components/Header/Header";
import world from "../../assets/world.png";
import WorldNav from "../../Components/WorldNav/WorldNav";

const Home = () => {
  return (
    <>
      <div className="home">
        <Header />
        <div className="welcome">
          <div className="welcomeText">
            <h2>Greetings my friend,</h2>
            <h3>Welcome</h3>
            <p className="myWorld">To my world</p>
          </div>
        </div>
       
      </div>
      <div className="world">
        <WorldNav />
      </div>
    </>
  );
};

export default Home;
