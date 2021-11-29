import React from 'react';

export default function TimeController({ name, setTime, currentTime }) {
  /***** FUNCTIONS *****/

  const timeDecrement = () => {
    // Time can only by bigger then 0
    setTime((prevTime) => (prevTime > 1 ? prevTime - 1 : prevTime));
  };
  const timeIncrement = () => {
    // Time can only be 60 or smaller
    setTime((prevTime) => (prevTime < 60 ? prevTime + 1 : prevTime));
  };

  return (
    <div id='timeController-container'>
      <label id={`${name}-label`}>{name} Length:</label>
      <span id={`${name}-increment`} onClick={timeIncrement}>
        <i className='fas fa-arrow-circle-up'></i>
      </span>
      <span id={`${name}-length`}>{currentTime}</span>
      <span id={`${name}-decrement`} onClick={timeDecrement}>
        <i className='fas fa-arrow-circle-down'></i>
      </span>
    </div>
  );
}
