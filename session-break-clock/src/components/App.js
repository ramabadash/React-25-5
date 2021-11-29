import React, { useState } from 'react';
import TimeController from './TimeController';

export default function App() {
  /***** STATES *****/

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  return (
    <div>
      <h1>25+5 clock</h1>
      <TimeController name={'break'} setTime={setBreakLength} currentTime={breakLength} /> {/* Break */}
      <TimeController name={'session'} setTime={setSessionLength} currentTime={sessionLength} /> {/* Session */}
    </div>
  );
}
