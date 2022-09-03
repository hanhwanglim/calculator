import React from 'react';
import {Trigonometry, Bracket} from '../Keys';
import Buttons from './Buttons';

/**
 * @param {React.props} props
 * @return {React.Component} functional button component
 */
function Functional(props) {
  const [handleNormalButtons, handleTrigonometryButtons] = props.handleButton;
  const trigonometryFunctions = Trigonometry.map((triganometry, index) => {
    return (
      <div key={`col-${triganometry.id}`} className="column">
        <Buttons
          key={triganometry.id}
          handleButton={handleTrigonometryButtons}
          {...triganometry}
        />
      </div>
    );
  });

  const bracketButtons = Bracket.map((bracket, index) => {
    return (
      <div key={`col-${bracket.id}`} className="column">
        <Buttons
          key={bracket.id}
          handleButton={handleNormalButtons}
          {...bracket}
        />
      </div>
    );
  });

  return (
    <div>
      <div className="btn-group">{trigonometryFunctions}</div>
      <div className="btn-group">{bracketButtons}</div>
    </div>
  );
}

export default Functional;
