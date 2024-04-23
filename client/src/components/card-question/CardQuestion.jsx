import { useState } from "react";
import decode from "decode-html";
import "./CardQuestion.css";
import PropTypes from "prop-types";
import Geography from "../../assets/icons/geography.png";
import Timer from "./Timer";

function CardQuestion({ quizzes }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [time, setTime] = useState(12);
  const [anim, setAnim] = useState("animated");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handlePageClick = (setClickAnswer) => {
    setTime(12);
    setAnim("animated");
    setCurrentPage(currentPage + 1);
    setClickAnswer("");
    setButtonDisabled(false);
  };

  const questionPerPage = 1;
  const lastPageQuestion = questionPerPage * currentPage;
  const firstQuestionPage = lastPageQuestion - questionPerPage;

  function displayQuestion() {
    return quizzes.slice(firstQuestionPage, lastPageQuestion);
  }

  const [clickAnswser, setClickAnswer] = useState("");

  function checkAnswer(correctAnswer, answer) {
    if (!clickAnswser || clickAnswser === "") return null;

    if (correctAnswer === clickAnswser && answer === clickAnswser) {
      return "answers-green";
    }

    if (answer === correctAnswer) return "answers-green";

    if (answer !== correctAnswer) return "answers-red";
    return null
  }

  const [questionCount, setQuestionCount] = useState(1);

  function questionCounter() {
    if (questionCount <= 9) setQuestionCount(questionCount + 1);
  }

  return (
    <section className="all-card">
      <Timer
        time={time}
        setTime={setTime}
        class={anim}
        setAnim={setAnim}
        anim={anim}
      />
      {displayQuestion().map((quizz) => (
        <>
          <div className="card-question">
            <div className="icons">
              <img className="icon" src={Geography} alt="" />
            </div>
            <hr />
            <p key={quizzes.question} className="question">
              {decode(quizz.question)}
            </p>
            <hr />
          </div>
          <section className="btn-answers">
            {quizz.answers.map((answer) => (
              <button
                onClick={() => {
                  setClickAnswer(answer);
                  setAnim("not-animated");
                  setButtonDisabled(true);
                }}
                key={answer}
                className={`answers ${checkAnswer(quizz.correct_answer, answer, quizz.incorrect_answers)}`}
                type="button"
                disabled={buttonDisabled}
              >
                {decode(answer)}
              </button>
            ))}
          </section>
        </>
      ))}
      <p>Question {questionCount}/10</p>
      <button
        type="button"
        onClick={() => {
          handlePageClick(setClickAnswer);
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
