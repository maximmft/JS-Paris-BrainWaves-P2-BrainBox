import PropTypes from "prop-types";
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
  } else if (correctAnswers === -21) {
    message =
      "U are autistic and ur dad should have left you over some milk, maybe you should kill yourself fucking autistic prick. The most important thing for everyone is to play, but for you is doing wheelie on your autistic wheelchair, another time : kill yourself, i won't say the nword here but if i could i would have said it. Is your favorite number 21? cause ur fucking disabled, poor ahh autistic fella. Imagine u had a dad 😂😂😂, bro he left u because u are fat 'abouac abouac' keep eating and u will get enough gravitationnal force to bring back ur dad 🤣 u look like EpicDudeBro99 with the filter retard ahh nigga 😂🤣 when they tell u broski the mean u do nautic ski bro because u are as fat as the pacific ocean pussy boy 😂😂😂😂😂😂 u look like a fraud suspicion 🤣 u look like the sentence 'oui allo bonjour?' 🤣😂😂😂😂😂";
  }

  return (
    <div className="container">
      <div className="confettis">
        <Confettis />
      </div>
      <h1>
        {correctAnswers}/{totalAnswers}
      </h1>
      <img src={trophy} className="trophy" alt="Trophy" />
      <h3>{message}</h3>
      <button className="homebtn" type="button">
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
