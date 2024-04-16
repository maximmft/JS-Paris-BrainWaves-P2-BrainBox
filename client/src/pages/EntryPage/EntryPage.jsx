import React from "react";
import { useNavigate } from "react-router-dom";
import "./Entrypage.css";
import background from "../../assets/images/background-entrypage.png";
import logo from "../../assets/images/brainbox-logo.png";

function EntryPage() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/entry-page"); 
  };

  return (
    <div
      className="entry-page"
      style={{ backgroundImage: `url(${background})` }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Itim&display=swap"
        rel="stylesheet"
      />
      <p className="itim-style">Enter the world of Brain Box</p>
      <img src={logo} className="logo" alt="Brain Box Logo" />
      <button onClick={navigateToHome} className="start-button">
        Let's Go
      </button>
    </div>
  );
}

export default EntryPage;
