import React from 'react';
import History from './History';

/**
 * Display area of the calculator
 * @param {React.props} props
 * @return {React.Component} Display area
 */
function Display(props) {
  return (
    <div>
      <History
        history={props.history}
        handleButton={props.replaceExpression}
      />
      <form>
        <input
          type="text"
          disabled={true}
          placeholder={props.display.join('')}
        />
      </form>
      {props.syntaxError && <h2>Syntax Error</h2>}
    </div>
  );
}

export default Display;
