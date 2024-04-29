import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./GameInterface.css";
import PropTypes from "prop-types";
import CardQuestion from "../card-question/CardQuestion";
import Header from "../Header/Header";

function GameInterface({ background, id, difficulty }) {
  const { numberSelector } = useParams();
  const [quizzes, setQuizzes] = useState([]);
  const getQuizz = () => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${numberSelector}&category=${id}&difficulty=${difficulty}`
      )
      .then((response) => {
        const results = [];
        response.data.results.forEach((question) => {
          const answers = [
            ...question.incorrect_answers,
            question.correct_answer,
          ];
          answers.sort(() => 0.5 - Math.random());
          results.push({ answers, ...question });
        });
        setQuizzes(results);
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
        <Header id={id} />
        <div className="card-container">
          <CardQuestion quizzes={quizzes} id={id} />
        </div>
      </div>
    </section>
  );
}

GameInterface.propTypes = {
  background: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default GameInterface;
