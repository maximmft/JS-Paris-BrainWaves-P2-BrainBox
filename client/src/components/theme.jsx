import PropTypes from "prop-types";
import "./theme.css";
import ThemeCard from "./themeCard";

function Theme({ name }) {
  return (
    <div
      className={`theme-card ${name === "Science & Nature" ? "nature" : ""} ${name === "History" ? "history" : ""} ${name === "Art" ? "art" : ""} ${name === "Entertainment: Music" ? "music" : ""} ${name === "Mythology" ? "mythology" : ""} ${name === "Geography" ? "geography" : ""} ${name === "Sports" ? "sports" : ""}${name === "General Knowledge" ? "all" : ""}`}
    >
      <ThemeCard name={name} />
    </div>
  );
}

Theme.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Theme;
