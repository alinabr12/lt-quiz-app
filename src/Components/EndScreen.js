import React, { useContext, useEffect } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank'; 
import louisHappy from '../Images/louis-happy.jpeg';
import louisSad from '../Images/louis-sad.gif';

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const retry = () => {
    setScore(0); // Reset score
    setGameState('menu');
  };

  // Calculate the percentage of correct answers
  const percentageCorrect = (score / Questions.length) * 100;

  // Determine if the percentage is greater than or equal to 80
  const isHighScore = percentageCorrect >= 80;

  useEffect(() => {
    if (isHighScore) {
      // Trigger fireworks animation if the user achieves a high score
      createFireworks();
    }
  }, [isHighScore]);

  // Function to create fireworks animation
  const createFireworks = () => {
    const container = document.getElementById('fireworks-container');
    const fireworks = document.createElement('div');
    fireworks.classList.add('firework');
    container.appendChild(fireworks);

    // Remove fireworks after animation ends
    fireworks.addEventListener('animationend', () => {
      container.removeChild(fireworks);
    });
  };

  // Define final message based on the percentage
  let finalMessage;
  if (percentageCorrect >= 80) {
    finalMessage = `You scored ${score} out of ${Questions.length} questions. Congratulations!`;
  } else if (percentageCorrect >= 50) {
    finalMessage = `You scored ${score} out of ${Questions.length} questions. Well done! But could be better!`;
  } else {
    finalMessage = `You scored ${score} out of ${Questions.length} questions. Louis is disappointed in you!`;
  }

  // Define image based on the percentage
  const image = percentageCorrect >= 50 ? louisHappy : louisSad;

  return (
    <div className={`EndScreen ${isHighScore ? 'high-score' : ''} results`}>
      <img className='img' src={image} alt="Louis" />
      <h1>Quiz Result</h1>
      <p className='congrats'>{finalMessage}</p>
      <button className='button-4' onClick={retry}>Retry</button>
      <div id="fireworks-container"></div> {/* Container for fireworks animation */}
    </div>
  );
}

export default EndScreen;
