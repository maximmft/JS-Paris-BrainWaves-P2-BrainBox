import PropTypes from "prop-types";
import {useNavigate} from 'react-router-dom';
import "./Score.css";
import trophy from "../../assets/icons/trophy.png";
import Confettis from "./Confettis";

function Score({ correctAnswers, totalAnswers }) {
  let message;

  if (correctAnswers >= 8) {
    message = "Well done !";
  } else if (correctAnswers >= 4) {
    message = "You can do better";
  } else if (correctAnswers >= 0) {
    message = "Ask ChatGPT next time";
  } 
  
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="confettis">
        <Confettis />
      </div>
      <h1 className="title-scores">
        {correctAnswers}/{totalAnswers}
      </h1>
      <img src={trophy} className="trophy" alt="Trophy" />
      <h3 className="mini-titles-scores">{message}</h3>
      <button className="homebtn" type="button" onClick={() => navigate('/')}>
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
