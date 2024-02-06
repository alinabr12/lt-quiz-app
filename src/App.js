import './App.css';
import React, {useState, useContext } from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import logo from './Images/loading.gif';

import { QuizContext } from './Helpers/Contexts';

const App = () => {
  const [gameState, setGameState] = useState("menu");

  const [score, setScore] = useState(0);

  return (
    <div className="App">
       <img className='logo' src={logo} alt='ltsmiley'/>
       <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
       {gameState === "menu" && <MainMenu />}
       {gameState === "quiz" && <Quiz />}
       {gameState === "endScreen" && <EndScreen />}
       </QuizContext.Provider>
    </div>
  );
}

export default App;
