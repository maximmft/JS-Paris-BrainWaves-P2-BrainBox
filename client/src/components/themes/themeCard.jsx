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
import Board from "../../assets/icons/board.png";
import Books from "../../assets/icons/books.png";
import Celebrities from "../../assets/icons/celebrities.png";
import Comics from "../../assets/icons/comics.png";
import Television from "../../assets/icons/television.png";
import Vehicle from "../../assets/icons/vehicle.png";


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
      {name === "Entertainment: Books" && <img src={Books} alt="icon book" />}
      {name === "Entertainment: Television" && <img src={Television} alt="icon television" />}
      {name === "Entertainment: Board Games" && <img src={Board} alt="icon board-games" />}
      {name === "Celebrities" && <img src={Celebrities} alt="icon oscar" />}
      {name === "Vehicles" && <img src={Vehicle} alt="icon vehicle" />}
      {name === "Entertainment: Comics" && <img src={Comics} alt="icon batman" />}
      <h3>{name}</h3>
      
    </>
  );
}


export default ThemeCard;

ThemeCard.propTypes = {
  name: PropTypes.string.isRequired,
};
