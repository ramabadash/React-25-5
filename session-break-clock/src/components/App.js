import React, { useState } from 'react';
import TimeController from './TimeController';
import Timer from './Timer';
import '../styles/App.css';

export default function App() {
  /***** STATES *****/
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [currentStage, setCurrentStage] = useState('session');

  /***** FUNCTIONS *****/
  const resetLength = () => {
    setSessionLength(25);
    setBreakLength(5);
  };

  return (
    <>
      <header>
        <h1>
          25+5 clock <i className='fas fa-clock'></i>
        </h1>
        <h2>It's time to start</h2>
      </header>
      <div className='app-container'>
        <div className='controller-app'>
          <TimeController name={'break'} setTime={setBreakLength} currentTime={breakLength} /> {/* Break */}
          <TimeController name={'session'} setTime={setSessionLength} currentTime={sessionLength} /> {/* Session */}
        </div>
        <Timer
          currentStage={currentStage}
          sessionLength={sessionLength}
          breakLength={breakLength}
          resetLength={resetLength}
        />
      </div>
    </>
  );
}
