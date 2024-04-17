import { useParams } from "react-router-dom";
import GameInterface from "../components/GaminInterface/GameInterface";
import background from "../assets/background/bakcground.png";

function QuizzPage() {
  const {id, difficulty} = useParams()
  return <GameInterface background={background} id={id} difficulty={difficulty} />;
}

export default QuizzPage;
