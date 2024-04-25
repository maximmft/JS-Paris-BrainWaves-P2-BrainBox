import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

function SelectNumbQuestion() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [numberSelector, setNumberSelector] = useState(0);

  return (
    <>
      <h1>Select number of questions</h1>
      <input
        type="range"
        value={numberSelector}
        min="1"
        max="50"
        onChange={(e) => setNumberSelector(e.target.value)}
      />
      <button
        type="button"
        onClick={() => navigate(`/difficultiespage/${id}/${numberSelector}`)}
      >
        Next page
      </button>
    </>
  );
}

export default SelectNumbQuestion;
