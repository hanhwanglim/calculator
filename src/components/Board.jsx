import React from 'react';
import Buttons from './Buttons';
import {Numbers, Operators, Trigonometry} from '../Keys';

/**
 * Board area contains Buttonss for numbers and operations
 * @return {React.Component} Board area
 */
function Board() {
  const createNumberButtons = () => {
    return Numbers.map((number) => {
      return (
        <Buttons
          key={number.id}
          {...number}
        />
      );
    });
  };

  const createOperatorButtons = () => {
    return Operators.map((operator) => {
      return (
        <Buttons
          key={operator.id}
          {...operator}
        />
      );
    });
  };

  const createTrigonometryButtons = () => {
    return Trigonometry.map((triganometry) => {
      return (
        <Buttons
          key={triganometry.id}
          {...triganometry}
        />
      );
    });
  };


  return (
    <div>
      {createNumberButtons()}
      {createOperatorButtons()}
      {createTrigonometryButtons()}
    </div>
  );
}

export default Board;
