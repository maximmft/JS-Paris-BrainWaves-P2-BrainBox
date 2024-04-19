import PropTypes from "prop-types";
import "./theme.css";
import All from "../../assets/icons/all.png";
import Geography from "../../assets/icons/geography.png";
import History from "../../assets/icons/history.png";
import Art from "../../assets/icons/art.png";
import Music from "../../assets/icons/music.png";
import Mythology from "../../assets/icons/mythology.png";
import Nature from "../../assets/icons/nature.png";
import Sports from "../../assets/icons/sports.png";
import Animals from "../../assets/icons/animals.png";
import Film from "../../assets/icons/film.png";
import Videogames from "../../assets/icons/video-games.png";
import Manga from "../../assets/icons/manga.png";


function ThemeCard({ name }) {

  return (
    <>
      {name === "Animals" && <img src={Animals} alt="icon animals" />}
      {name === "Entertainment: Japanese Anime & Manga" && <img src={Manga} alt="icon japon" />}
      {name === "Entertainment: Video Games" && <img src={Videogames} alt="icon controller" />}
      {name === "Entertainment: Film" && <img src={Film} alt="icon film" />}
      {name === "General Knowledge" && <img src={All} alt="icon dice" />}
      {name === "Geography" && <img src={Geography} alt="icon globe" />}
      {name === "History" && <img src={History} alt="icon parchemin" />}
      {name === "Art" && <img src={Art} alt="icon painting" />}
      {name === "Entertainment: Music" && <img src={Music} alt="icon micro" />}
      {name === "Mythology" && <img src={Mythology} alt="icon medusa" />}
      {name === "Science & Nature" && <img src={Nature} alt="icon tree" />}
      {name === "Sports" && <img src={Sports} alt="icon sport" />}
      <h3>{name}</h3>
      
    </>
  );
}


export default ThemeCard;

ThemeCard.propTypes = {
  name: PropTypes.string.isRequired,
};
