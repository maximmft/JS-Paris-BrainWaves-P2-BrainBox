import { useState } from "react";
import "./CardQuestion.css";
import PropTypes from "prop-types";
import Geography from "../../assets/icons/geography.png";

function CardQuestion({ quizzes }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const questionPerPage = 1;
  const lastPageQuestion = questionPerPage * currentPage;
  const firstQuestionPage = lastPageQuestion - questionPerPage;

  function displayQuestion() {
    return quizzes.slice(firstQuestionPage, lastPageQuestion);
  }

  const [clickAnswser, setClickAnswer] = useState("");

  function checkAnswer(correctAnswer, answer, incorrectAnswers) {
    if (clickAnswser === answer && correctAnswer === clickAnswser)
      return "answers-green";
    if (clickAnswser === answer && incorrectAnswers.includes(clickAnswser))
      return "answers-red";

    return null;
  }

  const [questionCount, setQuestionCount] = useState(1);

  function questionCounter() {
    if (questionCount <= 9) setQuestionCount(questionCount + 1);
  }

  return (
    <section className="all-card">
      {displayQuestion().map((quizz) => (
        <>
          <div className="card-question">
            <div className="icons">
              <img className="icon" src={Geography} alt="" />
            </div>
            <hr />
            <p key={quizzes.question} className="question">
              {quizz.question}
            </p>
            <hr />
          </div>
          <section className="btn-answers">
            {quizz.answers.map((answer) => (
              <button
                onClick={() => setClickAnswer(answer)}
                key={answer}
                className={`answers ${checkAnswer(quizz.correct_answer, answer, quizz.incorrect_answers)}`}
                type="button"
              >
                {answer}
              </button>
            ))}
          </section>
        </>
      ))}
      <p>Question {questionCount}/10</p>
      <button
        type="button"
        onClick={() => {
          handlePageClick();
          questionCounter();
        }}
        className="next-btn"
      >
        Next Question
      </button>
    </section>
  );
}

CardQuestion.propTypes = {
  quizzes: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      correct_answer: PropTypes.string.isRequired,
      incorrect_answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default CardQuestion;
