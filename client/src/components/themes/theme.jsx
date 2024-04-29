import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./theme.css";
import ThemeCard from "./themeCard";

function Theme({ name, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/numberquestions/${id}`);
    window.scrollTo(0, 0); 
  };

  return (
    <div
      className={`theme-card ${getClassName(name)}`}
      onClick={handleClick}
      onKeyDown={handleClick}
      role="presentation"
    >
      <ThemeCard name={name} id={id} />
    </div>
  );
}

function getClassName(name) {
  switch (name) {
    case "Entertainment: Video Games":
      return "video-games";
    case "Entertainment: Japanese Anime & Manga":
      return "manga";
    case "Entertainment: Film":
      return "film";
    case "Animals":
      return "animals";
    case "Science & Nature":
      return "nature";
    case "History":
      return "history";
    case "Art":
      return "art";
    case "Entertainment: Music":
      return "music";
    case "Mythology":
      return "mythology";
    case "Geography":
      return "geography";
    case "Sports":
      return "sports";
    case "General Knowledge":
      return "all";
    case "Entertainment: Books":
      return "books";
    case "Entertainment: Television":
      return "television";
    case "Entertainment: Board Games":
      return "board-games";
    case "Celebrities":
      return "celebrities";
    case "Vehicles":
      return "vehicles";
    case "Entertainment: Comics":
      return "comics";
    default:
      return "";
  }
}

Theme.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Theme;
