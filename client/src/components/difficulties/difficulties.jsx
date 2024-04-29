import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./difficulties.css";
import "../colors/colors.css";
import Background from "../../assets/background/background.png";

function Difficulties({ id }) {
  const { numberSelector } = useParams();

  let buttonClass = "";
  if (id === "9") {
    buttonClass = "all-background";
  } else if (id === "12") {
    buttonClass = "music-background";
  } else if (id === "15") {
    buttonClass = "video-games-background";
  } else if (id === "31") {
    buttonClass = "manga-background";
  } else if (id === "11") {
    buttonClass = "film-background";
  } else if (id === "27") {
    buttonClass = "animals-background";
  } else if (id === "17") {
    buttonClass = "nature-background";
  } else if (id === "20") {
    buttonClass = "mythology-background";
  } else if (id === "21") {
    buttonClass = "sports-background";
  } else if (id === "22") {
    buttonClass = "geography-background";
  } else if (id === "23") {
    buttonClass = "history-background";
  } else if (id === "10") {
    buttonClass = "books-background";
  } else if (id === "14") {
    buttonClass = "television-background";
  } else if (id === "16") {
    buttonClass = "board-games-background";
  } else if (id === "26") {
    buttonClass = "celebrities-background";
  } else if (id === "29") {
    buttonClass = "comics-background";
  } else if (id === "28") {
    buttonClass = "vehicles-background";}
    else {
    buttonClass = "art-background";
  }

  const navigate = useNavigate();

  return (
    <section
      className="difficultiesSection"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <h1>Choose your difficulty</h1>
      <div className="buttons">
        <button
          type="button"
          className={buttonClass}
          onClick={() =>
            navigate(`/difficultiespage/${id}/${numberSelector}/easy`)
          }
        >
          Easy
        </button>
        <button
          type="button"
          className={buttonClass}
          onClick={() =>
            navigate(`/difficultiespage/${id}/${numberSelector}/medium`)
          }
        >
          Medium
        </button>
        <button
          type="button"
          className={buttonClass}
          onClick={() =>
            navigate(`/difficultiespage/${id}/${numberSelector}/hard`)
          }
        >
          Hard
        </button>
      </div>
    </section>
  );
}

Difficulties.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Difficulties;
