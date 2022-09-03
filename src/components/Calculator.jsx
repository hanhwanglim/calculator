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
  const [history, setHistory] = useState([]);
  const [syntaxError, setSyntaxError] = useState(false);

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

  const calculate = () => {
    const exp = expression.join('');

    try {
      const ans = eval(exp).toString();
      setSyntaxError(false);
      setHistory((prevHistory) => [...prevHistory, {displayExpression, ans}]);
      setExpression(() => ans.split(''));
      setDisplayExpression(() => ans.split(''));
      console.log(expression);
      console.log(displayExpression);
    } catch (error) {
      setSyntaxError(true);
    }
  };

  const deleteExpression = () => {
    // console.log(displayExpression);

    setDisplayExpression((prevDisplayExpression) => {
      return prevDisplayExpression.slice(0, -1);
    });

    // console.log(displayExpression);

    setExpression((prevExpression) => prevExpression.slice(0, -1));
  };

  const handleButton = [
    handleNormalButtons,
    handleTrigonometryButtons,
    calculate,
    deleteExpression,
  ];

  return (
    <div>
      {syntaxError && <h2>Syntax Error</h2>}
      {history.length > 0 && <h2>{history.at(-1).ans}</h2>}
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
