import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Themes.css";
import logo from "../../assets/images/brainbox-logo.png";
import ThemeCard from "./themeCard.jsx";
import NavBar from "../../components/themes/NavBar.jsx";

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
      <div className="ThemeCard">
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
