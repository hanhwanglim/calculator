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
    const input = (value === 'Ans') ? history.at(-1).answer : value;

    setDisplayExpression((prevDisplayExpression) => {
      return [...prevDisplayExpression, value];
    });

    setExpression((prevExpression) => [...prevExpression, input]);
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
      setHistory((prevHistory) => {
        const hist = {
          expression: exp,
          answer: ans,
        };
        return [...prevHistory, hist];
      });
      setExpression(() => ans.split(''));
      setDisplayExpression(() => ans.split(''));
    } catch (error) {
      setSyntaxError(true);
    }
  };

  const deleteExpression = () => {
    setDisplayExpression((prevDisplayExpression) => {
      return prevDisplayExpression.slice(0, -1);
    });

    setExpression((prevExpression) => prevExpression.slice(0, -1));
  };

  const replaceExpression = (value) => {
    setDisplayExpression(() => value.split(''));
    setExpression(() => value.split(''));
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
      />
      <Board
        handleButton={handleButton}
      />
    </div>
  );
}

export default Calculator;
