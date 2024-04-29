import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../components/themes/theme.css";
import Theme from "../components/themes/theme";
import SearchBar from "../components/SearchBar/searchbar";
import { useUsername } from "../contexts/UsernameContext";
import Logo from "../assets/logo/brainbox.png"

function ThemesPage() {
  const [themes, setThemes] = useState([]);
  const [tabFilterTheme, setTabFilterTheme] = useState(themes);
  const {username} = useUsername()
  const {userAvatar} = useUsername()

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

  const selectedThemesId = [
    9, 11, 12, 15, 17, 20, 21, 22, 23, 25, 27, 31, 10, 14, 16, 26, 28, 29,
  ];
  const filteredThemes = tabFilterTheme.filter((theme) =>
    selectedThemesId.includes(theme.id)
  );

  const handleSearch = (event) => {
    event.preventDefault();
    const filter = themes.filter((theme) =>
      theme.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    if (filter.length !== 0) {
      setTabFilterTheme(filter);
    } else {
      setTabFilterTheme(themes);
    }
  };

  return (
    <>
      <div className="hello-ready-logo">
        <div className="hello-ready">
          {username === "" ? <h1>Hello Brain Boxer !</h1> : <h1>Hello {username}!</h1>}
          <h2>Ready for a quizz?</h2>
        </div>
        {userAvatar === "" ? <img src= {Logo}  id="logo-theme-page" alt="logo avatar" /> : <img src = {userAvatar}  id="logo-theme-page" alt="logo Brainbox" /> }      </div>
      <SearchBar handleSearch={handleSearch} />
      <h1 id="explore">Explore by themes</h1>
      <div className="theme-cards">
        {filteredThemes.map((theme) => (
          <Theme name={theme.name} id={theme.id} key={theme.id} />
        ))}
      </div>
      <Outlet />
    </>
  );
}

export default ThemesPage;
