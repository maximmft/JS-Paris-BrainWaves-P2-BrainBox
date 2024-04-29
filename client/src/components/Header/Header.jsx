import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useUsername } from "../../contexts/UsernameContext";
import "./header.css";
import Home from "../../assets/icons/home white.png";
import "../colors/colors.css";

function Header({ id }) {
  let nameQuizzes = "";
  let buttonClass = "";
  if (id === "9") {
    buttonClass = "all-background";
    nameQuizzes = "General Knowledge";
  } else if (id === "11") {
    buttonClass = "film";
    nameQuizzes = "Film";
  } else if (id === "15") {
    buttonClass = "video-games";
    nameQuizzes = "Video Games";
  } else if (id === "31") {
    buttonClass = "manga";
    nameQuizzes = "Japanese Anime & Manga";
  } else if (id === "27") {
    buttonClass = "animals";
    nameQuizzes = "Animals";
  } else if (id === "12") {
    buttonClass = "music-background";
    nameQuizzes = "Entertainment: Music";
  } else if (id === "17") {
    buttonClass = "nature-background";
    nameQuizzes = "Science & Nature";
  } else if (id === "20") {
    buttonClass = "mythology-background";
    nameQuizzes = "Mythology";
  } else if (id === "21") {
    buttonClass = "sports-background";
    nameQuizzes = "Sports";
  } else if (id === "22") {
    buttonClass = "geography-background";
    nameQuizzes = "Geography";
  } else if (id === "23") {
    buttonClass = "history-background";
    nameQuizzes = "History";
  } else if (id === "10") {
    buttonClass = "books-background";
    nameQuizzes = "Books";
  } else if (id === "14") {
    buttonClass = "television-background";
    nameQuizzes = "Television";
  } else if (id === "16") {
    buttonClass = "board-games-background";
    nameQuizzes = "Board Games";
  } else if (id === "26") {
    buttonClass = "celebrities-background";
    nameQuizzes = "Celebrities";
  } else if (id === "28") {
    buttonClass = "vehicles-background";
    nameQuizzes = "Vehicles";
  } else if (id === "29") {
    buttonClass = "comics-background";
    nameQuizzes = "Comics";
  } else {
    buttonClass = "art-background";
    nameQuizzes = "Art";
  }
  const navigate = useNavigate();
  const {userAvatar} = useUsername()

  return (
    <header className={buttonClass}>
      {userAvatar === "" ? null : <img src = {userAvatar}  id="logo-header-page" alt="logo Brainbox" /> }
      <h1>{nameQuizzes}</h1>
      <div className="btn">
        <img
          className="home-btn"
          src={Home}
          alt=""
          onClick={() => navigate(`/themespage`)}
          onKeyDown={() => navigate(`/themespage`)}
          role="presentation"
        />
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  id: PropTypes.number.isRequired,
};
