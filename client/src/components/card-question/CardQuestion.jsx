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

  const allAnswers = (responseInCorrect, responseCorrect) => {
    const tab = [...responseInCorrect, responseCorrect];

    return tab;
  };

  return (
    <section className="all-card">
      {displayQuestion().map((quizz) => (
        <>
          <div className="card-question">
            <div className="icons">
              <img className="icon" src={Geography} alt="" />
            </div>
            <p key={quizzes.question} className="question">
              {quizz.question}
            </p>
          </div>
          <section className="btn-answers">
            {allAnswers(quizz.incorrect_answers, quizz.correct_answer).map(
              (answer) => (
                <button key={answer} className="answers" type="button">
                  {answer}
                </button>
              )
            )}
          </section>
        </>
      ))}
      <button type="button" onClick={handlePageClick} className="next">
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
