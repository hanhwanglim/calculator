import React from 'react';
import {Operators} from '../Keys';
import Buttons from './Buttons';

/**
 * Creates rows of operators
 * @param {React.props} props
 * @return {React.Component} operator rows
 */
function createOperatorButtons(props) {
  const [
    handleNormalButtons,
    ,
    calculate,
    deleteExpression,
    replaceExpression,
  ] = props.handleButton;

  const rows = [];

  // Create button
  for (let i = 0; i < Operators.length; i += 2) {
    const buttonRow = Operators.slice(i, i + 2).map((operator, index) => {
      let handleButton;

      // Assigning operations to their respective handleButton
      handleButton = handleNormalButtons;
      if (operator.id === 'equals') handleButton = calculate;
      if (operator.id === 'delete') handleButton = deleteExpression;
      if (operator.id === 'AC') handleButton = replaceExpression;

      return (
        <div
          key={`col-${operator.id}`}
          className="column"
        >
          <Buttons
            key={operator.id}
            handleButton={handleButton}
            {...operator}
          />
        </div>
      );
    });
    rows.push(buttonRow);
  }

  return rows;
}

/**
 * Creates operator component
 * @param {React.props} props
 * @return {React.Component} Operator component
 */
function Operator(props) {
  const rows = createOperatorButtons(props);
  const operatorRows = rows.map((row, index) => {
    return (
      <div
        key={`row-${index}`}
        className="btn-group"
      >
        {row}
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row align-items-start">
        {operatorRows}
      </div>
    </div>
  );
}

export default Operator;
