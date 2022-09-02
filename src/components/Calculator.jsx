import React from 'react';
import Display from './Display';
import Board from './Board';
import {useState} from 'react';

/**
 * Calculator
 * @return {React.Component} Calculator
 */
function Calculator() {
  const [expression, setExpression] = useState([]);
  const [displayExpression, setDisplayExpression] = useState([]);
  // const [history, setHistory] = useState([]);

  const handleNormalButtons = (value) => {
    setDisplayExpression((prevDisplayExpression) => {
      return [...prevDisplayExpression, value];
    });

    setExpression((prevExpression) => [...prevExpression, value]);
  };

  const handleTrigonometryButtons = (value) => {
    const prevIsNumber = !isNaN(expression.at(-1));
    const operator = prevIsNumber ? `*Math.${value}` : `Math.${value}`;

    setDisplayExpression((prevDisplayExpression) => {
      return [...prevDisplayExpression, value];
    });

    setExpression((prevExpression) => [...prevExpression, operator]);
  };

  const handleButton = [handleNormalButtons, handleTrigonometryButtons];

  return (
    <div>
      <Display
        display={displayExpression}
      />
      <Board
        handleButton={handleButton}
      />
    </div>
  );
}

export default Calculator;
