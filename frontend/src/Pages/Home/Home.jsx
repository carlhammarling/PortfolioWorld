import React, { useEffect, useState } from "react";
import "./home.scss";
import Header from "../../Components/Header/Header";
import world from "../../assets/world.png";
import WorldNav from "../../Components/WorldNav/WorldNav";

const Home = () => {

  const [navigation, setNavigation] = useState('homeNav')

  useEffect(() => {
    console.log(navigation)
  }, [navigation])
  
  return (
    <div className="wrapper">
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
        <WorldNav setNavigation={setNavigation} navigation={navigation} />
      </div>
    </div>
  );
};

export default Home;
