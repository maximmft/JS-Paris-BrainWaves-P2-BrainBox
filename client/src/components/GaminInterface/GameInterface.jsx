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
