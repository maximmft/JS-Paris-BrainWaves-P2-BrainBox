import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../components/theme.css"
import Theme from "../components/theme";

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
      <h1 id="explore">Explore by themes</h1>
      <div className="theme-cards">
        {filteredThemes.map((theme) => (
          <Theme name={theme.name} key={theme.id} />
        ))}
      </div>
      <Outlet/>
    </>
  );
}

export default ThemesPage