import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Entrypage.css'; 

function EntryPage() {

  const navigate = useNavigate(); 

  const navigateToHome = () => {
    navigate('/entry-page'); 
 
  };

  return (
    <div className="entry-page">
      <img src="client/src/assets/images/background-entrypage.png" className="background" />
      <img src="client/src/assets/images/brainbox-logo.png" className="logo" />
      <button onClick={navigateToHome} className="start-button">
        Start Quiz
      </button>
    </div>
  );
}

export default EntryPage;

