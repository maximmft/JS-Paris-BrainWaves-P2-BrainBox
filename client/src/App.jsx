import "./App.css";
import axios from 'axios';
import { useState } from "react";


function App() {
  const [quizzes, setQuizzes] = useState([]);

  const GetQuizz =() => {
    
    axios 
    .get('https://opentdb.com/api.php?amount=10&difficulty=easy')
    .then((response) => {
      setQuizzes(response.data.results)
    })
  }
  const [currentPage, SetCurrentPage] = useState (1)
  
  const HandlePageClick = () =>{
    SetCurrentPage(currentPage+1);
  };

    const questionPerPage = 1
    const lastPageQuestion = questionPerPage * currentPage;
    const firstPageQuestion = lastPageQuestion - questionPerPage;
  
    function displayQuestion (){
      return quizzes.slice(firstPageQuestion,lastPageQuestion)

    }

    const allAnswers = (answerIncorrect, answerCorrect) => {
      const tab = [...answerIncorrect, answerCorrect];
      return tab;
    }

  return (
    <>
      <button type="button" onClick={GetQuizz}>Get Quizz</button>
      {/* {quizzes.slice(firstPageQuestion, lastPageQuestion).map((questionObject) => <p key={quizz.question}>{quizz.question}</p>)} */}
      {displayQuestion().map((quizz) =>  
      <>
        <p key={quizz.question}>{quizz.question}</p>
        {allAnswers(quizz.incorrect_answers, quizz.correct_answer).map((answer) => <button type="button" key={quizz.answer}>{answer}</button>)} 
      </>)}
      <div>
      <button type="button" onClick={HandlePageClick}>Next Question</button>
      </div>
    </>
  );
}

export default App;
