import React from 'react';

export default function Timer({ currentStage, sessionLength, breakLength }) {
  /***** FUNCTIONS *****/
  //Convert time to mm : ss format
  const clockify = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  };

  return (
    <div>
      <div>
        <label id='timer-label'>{currentStage}</label>
        <label id='time-left'>
          {' '}
          {/* TODO - Pass test*/}
          {currentStage === 'session' ? clockify(sessionLength * 60) : clockify(breakLength * 60)}
        </label>
      </div>
      <div className='btn-container'>
        <span id='start_stop'>
          <i className='fas fa-play'></i>
          <i className='fas fa-pause'></i>
        </span>
        <span id='reset'>
          <i className='fas fa-square'></i>
        </span>
      </div>
    </div>
  );
}
