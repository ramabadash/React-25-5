import React from 'react';

export default function TimeController({ name, setTime, currentTime }) {
  /***** FUNCTIONS *****/

  const timeDecrement = () => {
    setTime((prevTime) => {
      if (prevTime > 0) {
        return prevTime - 1;
      }
    });
  };
  const timeIncrement = () => {
    setTime((prevTime) => prevTime + 1);
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
