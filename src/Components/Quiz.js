import React, { useState, useContext } from 'react';
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Contexts';
import MainMenu from './MainMenu';
import EndScreen from './EndScreen'; // Import EndScreen component

function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);

  const nextQuestion = () => {
    setCurrQuestion(currQuestion + 1);
  };

  const handleOptionClick = (option) => {
    if (Questions[currQuestion].answer === option) {
      setScore(score + 1);
    }
    nextQuestion();
  };

  if (currQuestion === Questions.length) {
    // Display EndScreen component when quiz ends
    return <EndScreen />;
  }

  return (
    <div className="Quiz">
      <h1 className="question">{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button onClick={() => handleOptionClick('A')}>{Questions[currQuestion].optionA}</button>
        <button onClick={() => handleOptionClick('B')}>{Questions[currQuestion].optionB}</button>
        <button onClick={() => handleOptionClick('C')}>{Questions[currQuestion].optionC}</button>
        <button onClick={() => handleOptionClick('D')}>{Questions[currQuestion].optionD}</button>
      </div>
    </div>
  );
}

export default Quiz; 