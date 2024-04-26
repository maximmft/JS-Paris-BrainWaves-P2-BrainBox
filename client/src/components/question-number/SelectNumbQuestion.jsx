import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Background from "../../assets/background/background.png";
import "./selectNumbQuestion.css";
import Header from "../Header/Header";

function SelectNumbQuestion() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [numberSelector, setNumberSelector] = useState(0);

  return (
    <>
      <Header id={id} />
      <div
        className="background-number"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <section className="number-selection">
          <h1 className="title">Select number of questions</h1>
          <h2 className="questions">{numberSelector}</h2>
          <input
            className="input-range"
            style={{
              WebkitAppearance: "none",
              background: `linear-gradient(90deg ,rgb(251 133 87) ${(numberSelector * 100) / 25}%, rgb(223, 223, 223), rgb(223, 223, 223), rgb(223, 223, 223) `,
            }}
            type="range"
            value={numberSelector}
            min="1"
            max="25"
            onChange={(e) => setNumberSelector(e.target.value)}
          />
          <button
            className="nxt-btn"
            type="button"
            onClick={() =>
              navigate(`/difficultiespage/${id}/${numberSelector}`)
            }
          >
            Next page
          </button>
        </section>
      </div>
    </>
  );
}

export default SelectNumbQuestion;
