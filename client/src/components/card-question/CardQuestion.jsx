import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./CardQuestion.css";
import "./answers.css";
import PropTypes from "prop-types";
import Timer from "./Timer";

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
import All from "../../assets/icons/all.png";

function CardQuestion({ quizzes, id }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [time, setTime] = useState(12);
  const [anim, setAnim] = useState("animated");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { numberSelector } = useParams();
  const navigate = useNavigate();

  const handlePageClick = (setClickAnswer, goodAnswers) => {
    setTime(12);
    setAnim("animated");
    if (currentPage >= numberSelector) {
      navigate("/scorespage", { state: { good: goodAnswers } });
    }
    setCurrentPage(currentPage + 1);
    setClickAnswer("");
    setButtonDisabled(false);
  };

  if (time === 0 && buttonDisabled === false) setButtonDisabled(true);

  const questionPerPage = 1;
  const lastPageQuestion = questionPerPage * currentPage;
  const firstQuestionPage = lastPageQuestion - questionPerPage;

  function displayQuestion() {
    return quizzes.slice(firstQuestionPage, lastPageQuestion);
  }

  let hrClass = "";
  if (id === "9") {
    hrClass = "line-hr-all";
  } else if (id === "12") {
    hrClass = "line-hr-music";
  } else if (id === "15") {
    hrClass = "line-hr-video-game";
  } else if (id === "31") {
    hrClass = "line-hr-manga";
  } else if (id === "11") {
    hrClass = "line-hr-film";
  } else if (id === "27") {
    hrClass = "line-hr-animals";
  } else if (id === "17") {
    hrClass = "line-hr-nature";
  } else if (id === "20") {
    hrClass = "line-hr-mythology";
  } else if (id === "21") {
    hrClass = "line-hr-sports";
  } else if (id === "22") {
    hrClass = "line-hr-geography";
  } else if (id === "23") {
    hrClass = "line-hr-history";
  } else {
    hrClass = "line-hr-art";
  }

  const icons = () => {
    if (id === "9") return All;
    if (id === "12") return Music;
    if (id === "15") return Videogames;
    if (id === "31") return Manga;
    if (id === "11") return Film;
    if (id === "27") return Animals;
    if (id === "17") return Nature;
    if (id === "20") return Mythology;
    if (id === "21") return Sports;
    if (id === "22") return Geography;
    if (id === "23") return History;
    if (id === "25") return Art;

    return null;
  };

  let buttonClass = "";
  if (id === "9") {
    buttonClass = "all-answers";
  } else if (id === "12") {
    buttonClass = "music-answers";
  } else if (id === "15") {
    buttonClass = "video-games-answers ";
  } else if (id === "31") {
    buttonClass = "manga-answers";
  } else if (id === "11") {
    buttonClass = "film-answers";
  } else if (id === "27") {
    buttonClass = "animals-answers";
  } else if (id === "17") {
    buttonClass = "nature-answers";
  } else if (id === "20") {
    buttonClass = "mythology-answers";
  } else if (id === "21") {
    buttonClass = "sports-answers";
  } else if (id === "22") {
    buttonClass = "geography-answers";
  } else if (id === "25") {
    buttonClass = "art-answers";
  } else {
    buttonClass = "history-answers";
  }

  const [clickAnswser, setClickAnswer] = useState("");
  const [goodAnswers, setGoodAnswers] = useState(0);

  function checkAnswer(correctAnswer, answer) {
    if (!clickAnswser || clickAnswser === "") return null;

    if (correctAnswer === clickAnswser && answer === clickAnswser) {
      return "answers-green";
    }
    if (correctAnswer === clickAnswser) return null;

    if (answer === correctAnswer) return "answers-green";

    if (answer !== correctAnswer) return "answers-red";
    return null;
  }

  const [questionCount, setQuestionCount] = useState(1);
  function questionCounter() {
    if (questionCount <= numberSelector) setQuestionCount(questionCount + 1);
  }

  function handleAnswer(answer, correctAnswer) {
    if (answer === correctAnswer) {
      setGoodAnswers(goodAnswers + 1);
    }
    setClickAnswer(answer);
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
              <img className="icon" src={icons()} alt="" />
            </div>
            <hr className={hrClass} />
            <p key={quizzes.question} className="question">
              {quizz.question
                .replace(/&quot;/g, '"')
                .replace(/&#039;/g, "")
                .replace(/&shy;/g, "")
                .replace(/&ldquo;/g, "'")
                .replace(/&rdquo;/g, "'")
                .replace(/&rsquo;/g, "’")}
            </p>
            <hr className={hrClass} />
          </div>
          <section className="btn-answers">
            {quizz.answers.map((answer) => (
              <button
                onClick={() => {
                  handleAnswer(answer, quizz.correct_answer);
                  setClickAnswer(answer);
                  setAnim("not-animated");
                  setButtonDisabled(true);
                }}
                key={answer}
                className={`${buttonClass} ${checkAnswer(quizz.correct_answer, answer, quizz.incorrect_answers)}`}
                type="button"
                disabled={buttonDisabled}
              >
                {answer
                  .replace(/&deg;/, "°")
                  .replace(/&quot;/g, '"')
                  .replace(/&#039;/g, "'")
                  .replace(/&ldquo;/g, "'")
                  .replace(/&hellip;/g, "...")
                  .replace(/&rdquo;/g, "'")
                  .replace(/&rsquo;/g, "’")
                  .replace(/&iacute;/g, "í")
                  .replace(/&eacute/g, "é")
                  .replace(/&ndash;/g, "-")
                  .replace(/&amp;/g, "&")}
              </button>
            ))}
          </section>
        </>
      ))}
      <button
        type="button"
        onClick={() => {
          handlePageClick(setClickAnswer, goodAnswers);
          questionCounter();
        }}
        className="next-button"
      >
        Next Question
      </button>
      <p className="question-counter">
        Question {questionCount}/{numberSelector}
      </p>
    </section>
  );
}

CardQuestion.propTypes = {
  quizzes: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      correct_answer: PropTypes.string.isRequired,
      incorrect_answers: PropTypes.arrayOf(PropTypes.string).isRequired,
      answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  id: PropTypes.string.isRequired,
};

export default CardQuestion;
