import React from 'react';
import Functional from './Functional';
import Keypad from './Keypad';
import Operator from './Operators';

/**
 * Board area contains Buttons for numbers and operations
 * @param {React.props} props
 * @return {React.Component} Board area
 */
function Board(props) {
  const [
    handleNormalButtons,
    handleTrigonometryButtons,
  ] = props.handleButton;

  return (
    <div className="container">
      <Functional
        handleButton={[handleNormalButtons, handleTrigonometryButtons]}
      />
      <div className="row">
        <div className="col">
          <Keypad
            handleButton={handleNormalButtons}
          />
        </div>
        <div className="col">
          <Operator
            handleButton={props.handleButton}
          />
        </div>
      </div>
    </div>
  );
}

export default Board;
