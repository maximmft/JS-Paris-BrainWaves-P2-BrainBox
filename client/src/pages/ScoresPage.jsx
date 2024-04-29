import { useLocation, useParams } from "react-router-dom";
import Score from "../components/score/Score";

function ScoresPage() {
  const { numberSelector } = useParams();
  const location = useLocation();

  return (
    <Score correctAnswers={location.state.good} totalAnswers={numberSelector} />
  );
}

export default ScoresPage;
