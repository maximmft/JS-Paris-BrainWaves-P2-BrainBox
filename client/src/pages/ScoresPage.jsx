import { useLocation } from "react-router-dom";
import Score from "../components/score/Score"

function ScoresPage () {
    
    const location = useLocation();


    return ( <Score correctAnswers={location.state.good} totalAnswers={10}/> )
}

export default ScoresPage