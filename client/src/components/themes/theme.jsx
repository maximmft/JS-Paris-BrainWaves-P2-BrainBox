import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./theme.css";
import ThemeCard from "./themeCard";

function Theme({ name, id }) {
  const navigate = useNavigate()
  return (
    <div
      className={`theme-card ${name === "Science & Nature" ? "nature" : ""} ${name === "History" ? "history" : ""} ${name === "Art" ? "art" : ""} ${name === "Entertainment: Music" ? "music" : ""} ${name === "Mythology" ? "mythology" : ""} ${name === "Geography" ? "geography" : ""} ${name === "Sports" ? "sports" : ""}${name === "General Knowledge" ? "all" : ""}`}
      onClick={() => navigate(`/difficultiespage/${id}`)} onKeyDown={() =>navigate(`/difficultiespage/${id}`)} role="presentation">
      <ThemeCard name={name} id={id} />
    </div>
  );
}

Theme.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Theme;
