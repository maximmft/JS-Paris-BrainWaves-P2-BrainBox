import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Themes.css";
import PropTypes from "prop-types";
import All from "../../assets/icons/all.png";
import Geography from "../../assets/icons/geography.png";
import History from "../../assets/icons/history.png";
import Art from "../../assets/icons/art.png";
import Music from "../../assets/icons/music.png";
import Mythology from "../../assets/icons/mythology.png";
import Nature from "../../assets/icons/nature.png";
import Sports from "../../assets/icons/sports.png";
import logo from "../../assets/images/brainbox-logo.png";

// ThemeCard component
const ThemeCard = ({ name }) => {
  const images = {
    "General Knowledge": All,
    Geography: Geography,
    History: History,
    Art: Art,
    "Entertainment: Music": Music,
    Mythology: Mythology,
    "Science & Nature": Nature,
    Sports: Sports,
  };

  return (
    <div
      className="theme-card"
      onClick={() => {
        /* Handle click if necessary */
      }}
    >
      <img src={images[name]} alt={`icon ${name.toLowerCase()}`} />
      <h3>{name}</h3>
    </div>
  );
};

ThemeCard.propTypes = {
  name: PropTypes.string.isRequired,
};

// Themes component
function Themes() {
  const [themes, setThemes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://opentdb.com/api_category.php").then((response) => {
      setThemes(response.data.trivia_categories);
    });
  }, []);

  return (
    <>
      <h1>Hello Brain Boxer!</h1>
      <img src={logo} className="logo" alt="Brain Box Logo" />
      <div className="theme-cards">
        {themes.map((theme) => (
          <div
            key={theme.id}
            onClick={() => navigate(`/difficultiespage/${theme.id}`)}
          >
            <ThemeCard name={theme.name} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Themes;
