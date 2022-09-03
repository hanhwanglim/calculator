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

  /**
   * Adds the button value to the display and expression
   * @param {String} value button value
   */
  const handleNormalButtons = (value) => {
    let input;
    if (value === 'Ans') input = history.at(-1).answer;
    else if (value === '00') input = value.split('');
    else input = [value];

    setDisplayExpression((prevDisplayExpression) => {
      return [...prevDisplayExpression, ...input];
    });

    setExpression((prevExpression) => [...prevExpression, ...input]);
  };

  /**
   * Special handler specifically for trigonometric functions
   * @param {String} value button value
   */
  const handleTrigonometryButtons = (value) => {
    const prevIsNumber = !isNaN(expression.at(-1));
    const operator = prevIsNumber ? `*Math.${value}` : `Math.${value}`;

    setDisplayExpression((prevDisplayExpression) => {
      return [...prevDisplayExpression, value];
    });

    setExpression((prevExpression) => [...prevExpression, operator]);
  };

  /**
   * Replaces the display and expression with value
   * @param {String} value value
   */
  const replaceExpression = (value) => {
    setDisplayExpression(() => value.split(''));
    setExpression(() => value.split(''));
  };

  /**
   * Computes the expression and replaces display with that value
   */
  const calculate = () => {
    const exp = expression.join('');

    try {
      const ans = eval(exp).toString();
      setSyntaxError(false);

      // Add expression and answer to history
      setHistory((prevHistory) => {
        const hist = {
          expression: exp,
          answer: ans,
        };
        return [...prevHistory, hist];
      });

      replaceExpression(ans);
    } catch (error) {
      setSyntaxError(true);
    }
  };

  /**
   * Delete an operation or button from expression and display
   */
  const deleteExpression = () => {
    setDisplayExpression((prevDisplayExpression) => {
      return prevDisplayExpression.slice(0, -1);
    });

    setExpression((prevExpression) => prevExpression.slice(0, -1));
  };

  const handleButton = [
    handleNormalButtons,
    handleTrigonometryButtons,
    calculate,
    deleteExpression,
    replaceExpression,
  ];

  return (
    <div>
      <Display
        display={displayExpression}
        syntaxError={syntaxError}
        history={history}
        handleButton={replaceExpression}
      />
      <Board
        handleButton={handleButton}
      />
    </div>
  );
}

export default Calculator;
