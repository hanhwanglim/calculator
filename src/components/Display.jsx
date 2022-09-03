import React from 'react';
import History from './History';

/**
 * Display area of the calculator
 * @param {React.props} props
 * @return {React.Component} Display area
 */
function Display(props) {
  return (
    <div className="input-group mb-3">
      <History
        history={props.history}
        handleButton={props.handleButton}
      />
      <input
        type="text"
        className="form-control"
        disabled={true}
        placeholder={props.display.join('')}
      />
      {props.syntaxError && <h2>Syntax Error</h2>}
    </div>
  );
}

export default Display;
