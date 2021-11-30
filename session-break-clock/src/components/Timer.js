import React, { useState, useEffect } from 'react';
import '../styles/Timer.css';

export default function Timer({ currentStage, resetLength, sessionLength, breakLength }) {
  /***** STATES *****/
  const [timer, setTimer] = useState(currentStage === 'session' ? sessionLength * 60 : breakLength * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalName, setIntervalName] = useState(null);

  /***** FUNCTIONS *****/
  //Update timer state on every length or stage change
  useEffect(() => {
    if (!isRunning) {
      setTimer(currentStage === 'session' ? sessionLength * 60 : breakLength * 60);
    }
  }, [sessionLength, breakLength, currentStage]);

  //Convert time to mm : ss format
  const clockify = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  };

  //Run and stop time
  const startStopTime = () => {
    if (!isRunning) {
      //Update clock every second
      setIntervalName(
        setInterval(() => {
          if (timer > 0) {
            setTimer((prevTimer) => prevTimer - 1);
          } else {
            clearInterval(intervalName); //Stop clock
            setIsRunning(false);
          }
        }, 1000)
      );
      setIsRunning(true);
      return;
    } else {
      clearInterval(intervalName); //Stop clock
      setIsRunning(false);
    }
  };

  const reset = () => {
    resetLength();
    clearInterval(intervalName); //Stop clock
    setIsRunning(false);
    setTimer(currentStage === 'session' ? sessionLength * 60 : breakLength * 60);
  };

  return (
    <div className='timer-container'>
      <div className='time-labels'>
        <label id='timer-label'>{currentStage} Time!</label>
        <label id='time-left'>{clockify(timer)}</label>
      </div>
      <div className='btn-container' onClick={startStopTime}>
        <span id='start_stop'>
          <i className='fas fa-play'></i>
          <i className='fas fa-pause'></i>
        </span>
        <span id='reset' onClick={reset}>
          <i className='fas fa-square'></i>
        </span>
      </div>
    </div>
  );
}
