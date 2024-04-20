import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../components/themes/theme.css";
import Theme from "../components/themes/theme";
import Logo from "../assets/logo/brainbox.png";
import SearchBar from "../components/SearchBar/searchbar";

function ThemesPage() {
  const [themes, setThemes] = useState([]);
  const [tabFilterTheme, setTabFilterTheme] = useState(themes)

  const GetThemes = () => {
    axios.get("https://opentdb.com/api_category.php").then((response) => {
      setThemes(response.data.trivia_categories);
    });
  };


  useEffect(() => {
    setTabFilterTheme(themes);
  }, [themes]);

  useEffect(() => {
    GetThemes();
  }, []);

  const selectedThemesId = [9, 11, 12, 15, 17, 20, 21, 22, 23, 25, 27,31];
  const filteredThemes = tabFilterTheme.filter((theme) =>
    selectedThemesId.includes(theme.id)
  );

    const handleSearch = (event) => {
        event.preventDefault();
        const filter = themes.filter(theme => theme.name.toLowerCase().includes(event.target.value))
        if (filter.length !== 0){
            setTabFilterTheme(filter)
          } else {
            setTabFilterTheme(themes)
          }
    }

  return (
    <>
      <div className="hello-ready-logo">
        <div className="hello-ready">
          <h1>Hello Brain Boxer!</h1>
          <h2>Ready for a quizz?</h2>
        </div>
        <img src={Logo} id="logo-theme-page" alt="logo Brainbox"/>
      </div>
      <SearchBar handleSearch={handleSearch}/>
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
