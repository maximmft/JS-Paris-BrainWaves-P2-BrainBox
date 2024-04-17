import { useParams } from "react-router-dom";
import Difficulties from "../components/difficulties/difficulties";
import Header from "../components/Header/Header"

function DifficultiesPage() {
  const {id} = useParams()
  return (
  <>
  <Header id={id}/>
  <Difficulties id={id}/>
  </>
  )
}

export default DifficultiesPage;
