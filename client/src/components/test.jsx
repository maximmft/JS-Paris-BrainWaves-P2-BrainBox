import React, { useState, useEffect } from 'react';

function App() {

  const [user, setUser] = useState(null);

  const fetchQuizUser = () => {
    fetch('https://opentdb.com/api.php?amount=10')
      .then(response => response.json())
      .then(data => {
        const userData = data.results[0];
        setUser({
          correctAnswer: userDate.correct_answer,
          wrongAnswers: userData.incorrect_answers,
      });
  }};

  useEffect(() => {
    fetchQuizUSer();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={fetchRandomUser}>Next Question</button>
    </div>
  );
}

export default App;
