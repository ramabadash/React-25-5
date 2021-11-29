import React from 'react';

export default function TimeController({ name, setTime, currentTime }) {
  return (
    <div id='timeController-container'>
      <label id={`${name}-label`}>{name} Length:</label>
      <span id={`${name}-increment`}>
        <i className='fas fa-arrow-circle-up'></i>
      </span>
      <span id={`${name}-length`}>{currentTime}</span>
      <span id={`${name}-decrement`}>
        <i className='fas fa-arrow-circle-down'></i>
      </span>
    </div>
  );
}
