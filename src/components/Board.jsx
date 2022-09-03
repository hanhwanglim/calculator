import React from 'react';
import Buttons from './Buttons';
import {Numbers, Operators, Trigonometry} from '../Keys';

/**
 * Board area contains Buttonss for numbers and operations
 * @param {React.props} props
 * @return {React.Component} Board area
 */
function Board(props) {
  const [handleNormalButtons,
    handleTrigonometryButtons,
    calculate, deleteExpression] = props.handleButton;

  const createNumberButtons = () => {
    return Numbers.map((number) => {
      return (
        <Buttons
          key={number.id}
          handleButton={handleNormalButtons}
          {...number}
        />
      );
    });
  };

  const createOperatorButtons = () => {
    return Operators.map((operator) => {
      let handleButton;
      if (operator.id === 'equals') handleButton = calculate;
      else if (operator.id === 'delete') handleButton = deleteExpression;
      else handleButton = handleNormalButtons;

      return (
        <Buttons
          key={operator.id}
          handleButton={handleButton}
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
          handleButton={handleTrigonometryButtons}
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
