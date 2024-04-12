import  axios  from "axios";
import { useState } from "react";


function App() {
const [quizzes, setQuizzes] = useState([]);

 const getQuizz = () => {
  axios.get('https://opentdb.com/api.php?amount=10')
  .then((response) => {
    setQuizzes(response.data.results)
  })
}

const [currentPage, setCurrentPage] = useState(1);

const handlePageClick = () => {
  setCurrentPage(currentPage+1)
};

const questionPerPage = 1;
const lastPageQuestion = questionPerPage * currentPage;
const firstQuestionPage = lastPageQuestion - questionPerPage;

function displayQuestion () {
  return quizzes.slice(firstQuestionPage, lastPageQuestion)
}


const allAnswers = (responseInCorrect, responseCorrect) => {
  const tab = [...responseInCorrect, responseCorrect];

  return tab;
}

return (
 <>
  <button type="button" onClick={getQuizz}>Click Here for a questions</button>
  {displayQuestion().map((quizz) => 
  <>
  <p key={quizzes.question}>{quizz.question} </p>
  {allAnswers(quizz.incorrect_answers, quizz.correct_answer).map((answer) => <button key={answer} type="button">{answer}</button>)}
  </>)}
  {/* {questions.slice(firstQuestionPage,lastPageQuestion).map((question) => <p>{question.question}</p>)} */}
  {/* {questions.slice(firstQuestionPage,lastPageQuestion).map((answer) => <p key={questions.question}>{answer.correct_answer} / {answer.incorrect_answers.join(' / ')}</p>)} */}
 
  <div>

  <button type="button" onClick={handlePageClick}>Next Question</button>
  </div>
  </>
)
  
}

export default App;
