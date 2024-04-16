import axios from "axios";
import { useState, useEffect } from "react";
import "./GameInterface.css";
import PropTypes from "prop-types";
import CardQuestion from "../card-question/CardQuestion";
import Header from "../Header/Header";

function GameInterface({ background }) {
  const [quizzes, setQuizzes] = useState([]);

  const getQuizz = () => {
    axios.get("https://opentdb.com/api.php?amount=10").then((response) => {
      setQuizzes(response.data.results);
    });
  };

  useEffect(() => {
    getQuizz();
  }, []);

  return (
    <section className="grid">
      <div
        className="background"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Header />
        <div className="card-container">
          <CardQuestion quizzes={quizzes} />
        </div>
      </div>
    </section>
  );
}

GameInterface.propTypes = {
  background: PropTypes.string.isRequired,
};

export default GameInterface;
