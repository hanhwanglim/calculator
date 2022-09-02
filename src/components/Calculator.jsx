import React from 'react';
import Display from './Display';
import Board from './Board';

/**
 * Calculator
 * @return {React.Component} Calculator
 */
function Calculator() {
  return (
    <div>
      <Display />
      <Board />
    </div>
  );
}

export default Calculator;
