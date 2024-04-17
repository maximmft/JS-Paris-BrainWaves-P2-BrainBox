import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../components/themes/theme.css";
import Theme from "../components/themes/theme";
import Logo from "../assets/logo/brainbox.png";

function ThemesPage() {
  const [themes, setThemes] = useState([]);

  const GetThemes = () => {
    axios.get("https://opentdb.com/api_category.php").then((response) => {
      setThemes(response.data.trivia_categories);
    });
  };

  useEffect(() => {
    GetThemes();
  }, []);

  const selectedThemesId = [9, 12, 17, 20, 21, 22, 23, 25];
  const filteredThemes = themes.filter((theme) =>
    selectedThemesId.includes(theme.id)
  );
   // stocker dans un tableau
  return (
    <>
      <div className="hello-ready-logo">
        <div className="hello-ready">
          <h1>Hello Brain Boxer!</h1>
          <h2>Ready for a quizz?</h2>
        </div>
        <img src={Logo} id="logo-theme-page" alt="logo Brainbox"/>
      </div>
      <h1 id="explore">Explore by themes</h1>
      <div className="theme-cards">
        {filteredThemes.map((theme) => (
          <Theme name={theme.name} id={(theme.id)} key={theme.id} />
        ))}
      </div>
      <Outlet />
    </>
  );
}

export default ThemesPage;
