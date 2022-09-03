import React from 'react';
import {Trigonometry, Bracket} from '../Keys';
import Buttons from './Buttons';

/**
 * Creates button row for trigonometric functions
 * @param {React.props} props
 * @return {React.Component} trigonometric component
 */
function createTrigonometricButtons(props) {
  const [, handleTrigonometryButtons] = props.handleButton;

  const trigonometryFunctions = Trigonometry.map((triganometry) => {
    return (
      <div key={`col-${triganometry.id}`} className="col">
        <Buttons
          key={triganometry.id}
          handleButton={handleTrigonometryButtons}
          {...triganometry}
        />
      </div>
    );
  });

  return trigonometryFunctions;
}

/**
 * Create button row for brackets
 * @param {React.props} props
 * @return {React.Component} bracket button row
 */
function createBracketButtons(props) {
  const [handleNormalButtons] = props.handleButton;

  const bracketButtons = Bracket.map((bracket, index) => {
    return (
      <div key={`col-${bracket.id}`} className="col">
        <Buttons
          key={bracket.id}
          handleButton={handleNormalButtons}
          {...bracket}
        />
      </div>
    );
  });

  return bracketButtons;
}

/**
 * @param {React.props} props
 * @return {React.Component} functional button component
 */
function Functional(props) {
  const trigonometricButtons = createTrigonometricButtons(props);
  const bracketButtons = createBracketButtons(props);

  return (
    <div>
      <div className="row">{trigonometricButtons}</div>
      <div className="row">{bracketButtons}</div>
    </div>
  );
}

export default Functional;
