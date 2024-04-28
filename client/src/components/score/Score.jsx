import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useUsername } from "../../contexts/UsernameContext";
import "./Score.css";
import stupid from "../../assets/icons/stupid.jpg";
import congratulation from "../../assets/icons/congratulation.jpg";
import memeGirl from "../../assets/icons/meme-girl.jpg";
import memeMath from "../../assets/icons/meme-math.jpg";
import Confettis from "./Confettis";
import background from "../../assets/background/background.png";

function Score({ correctAnswers, totalAnswers }) {
  const {username, userAvatar} = useUsername()
  let message;
  let image = ""

  if (correctAnswers === 10) {
    message = "Homer is proud of you !!";
    image = congratulation;
  } else if (correctAnswers >= 7) {
    message = "Almost !";
    image = memeMath;
  } else if (correctAnswers >= 4) {
    message = "Ask ChatGPT next time...";
    image = memeGirl;
  } else if (correctAnswers >= 0) {
    image = stupid;
  }

  const navigate = useNavigate();

  return (
    <div className="container" style={{ backgroundImage: `url(${background})` }}>
      <div className="confettis">
        <Confettis />
      </div>
      <div className="avatar-title">
        <img src={userAvatar} className="avatar-logo" alt="avatar-logo"/>
        {username === "" ? <h1>Your score is: </h1> : <h1 className="username-title">{username}! Your score is:  </h1>}
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
