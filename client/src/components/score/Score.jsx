import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./Score.css";
import stupid from "../../assets/icons/stupid.jpg";
import congratulation from "../../assets/icons/congratulation.jpg";
import memeGirl from "../../assets/icons/meme-girl.jpg";
import memeMath from "../../assets/icons/meme-math.jpg";
import Confettis from "./Confettis";
import background from "../../assets/background/background.png";

function Score({ correctAnswers, totalAnswers }) {
  const percentage = ((correctAnswers / totalAnswers) * 100).toFixed(2);
  let message;
  let image = "";

  if (percentage >= 90) {
    message = "Homer is proud of you !!";
    image = congratulation;
  } else if (percentage >= 60) {
    message = "Almost !";
    image = memeMath;
  } else if (percentage >= 30) {
    message = "Ask ChatGPT next time...";
    image = memeGirl;
  } else if (percentage >= 0) {
    message = "Patrick? Is that you?";
    image = stupid;
  }

  const navigate = useNavigate();

  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="confettis">
        <Confettis />
      </div>
      <h1 className="title-scores">
        {correctAnswers}/{totalAnswers}
      </h1>
      <img src={image} className="score" alt="winningImage" />
      <h3 className="mini-titles-scores">{message}</h3>
      <button
        className="homebtn"
        type="button"
        onClick={() => navigate("/themespage")}
      >
        Home
      </button>
    </div>
  );
}

Score.propTypes = {
  correctAnswers: PropTypes.number.isRequired,
  totalAnswers: PropTypes.number.isRequired,
};

export default Score;
