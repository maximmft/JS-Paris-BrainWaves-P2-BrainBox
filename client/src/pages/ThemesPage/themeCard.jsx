import React from "react";
import PropTypes from "prop-types";
import "./Themes.css";
import All from "../../assets/icons/all.png";
import Geography from "../../assets/icons/geography.png";
import History from "../../assets/icons/history.png";
import Art from "../../assets/icons/art.png";
import Music from "../../assets/icons/music.png";
import Mythology from "../../assets/icons/mythology.png";
import Nature from "../../assets/icons/nature.png";
import Sports from "../../assets/icons/sports.png";

function ThemeCard({ name }) {
  return (
    <>
      <div className="theme-card">
        {name === "General Knowledge" && <img src={All} alt="icon dice" />}
        {name === "Geography" && <img src={Geography} alt="icon globe" />}
        {name === "History" && <img src={History} alt="icon parchemin" />}
        {name === "Art" && <img src={Art} alt="icon painting" />}
        {name === "Entertainment: Music" && (
          <img src={Music} alt="icon micro" />
        )}
        {name === "Mythology" && <img src={Mythology} alt="icon medusa" />}
        {name === "Science & Nature" && <img src={Nature} alt="icon tree" />}
        {name === "Sports" && <img src={Sports} alt="icon sport" />}
        <h3>{name}</h3>
      </div>
    </>
  );
}
ThemeCard.propTypes = {
  name: PropTypes.string.isRequired,
};
export default ThemeCard;
