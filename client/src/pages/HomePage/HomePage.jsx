import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import background from "../../assets/images/background-entrypage.png";
import logo from "../../assets/images/brainbox-logo.png";

function HomePage() {
  const navigate = useNavigate();


  return (
    <div
      className="home-page"
      style={{ backgroundImage: `url(${background})` }}
    >
      <img src={logo} className="logo" alt="Brain Box Logo" />
      <p className="itim-style">Enter the world of Brain Box</p>
      <button className="start-button" onClick={() => navigate("/themes")}>Let's Go</button>
    </div>
  
  );
}

export default HomePage;
