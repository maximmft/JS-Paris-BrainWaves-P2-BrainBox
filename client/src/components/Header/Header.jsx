import PropTypes from "prop-types";
import "./header.css";
import Home from "../../assets/icons/home white.png";
import "../colors/colors.css";

function Header({id}) {

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
  }else if (id === "31") {
    buttonClass = "manga";
    nameQuizzes = "Japanese Anime & Manga";
  }else if (id === "27") {
    buttonClass = "animals";
    nameQuizzes = "Animals";
  }else if (id === "12") {
    buttonClass = "music-background";
    nameQuizzes = "Entertainment: Music";
  }else if (id === "17") {
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
  } else {
    buttonClass = "art-background";
    nameQuizzes = "Art";
  }

  return (
    <header className={buttonClass}>
      <h1>{nameQuizzes}</h1>
      <div className="btn">
        <img className="home-btn" src={Home} alt="" />
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  id: PropTypes.number.isRequired,
}