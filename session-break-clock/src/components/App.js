import React, { useState } from 'react';
import TimeController from './TimeController';
import Timer from './Timer';

export default function App() {
  /***** STATES *****/
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [currentStage, setCurrentStage] = useState('session');
  const [timer, setTimer] = useState(25 * 60);

  /***** FUNCTIONS *****/
  const reset = () => {
    setSessionLength(25);
    setBreakLength(5);
  };

  return (
    <div>
      <h1>25+5 clock</h1>
      <TimeController name={'break'} setTime={setBreakLength} currentTime={breakLength} /> {/* Break */}
      <TimeController name={'session'} setTime={setSessionLength} currentTime={sessionLength} /> {/* Session */}
      <Timer currentStage={currentStage} sessionLength={sessionLength} breakLength={breakLength} />
    </div>
  );
}
