import React from 'react';
import Buttons from './Buttons';
import {Numbers, Misc} from '../Keys';

/**
 * Creates the keypad component
 * @param {React.props} props
 * @return {React.Component} keypad component
 */
function createKeypad(props) {
  const rows = [];

  // Create button from 1 - 9
  for (let i = 0; i < Numbers.length; i += 3) {
    const buttonRow = Numbers.slice(i, i + 3).map((number, index) => {
      return (
        <div key={`col-${number.id}`} className="column">
          <Buttons
            key={number.id}
            handleButton={props.handleButton}
            {...number}
          />
        </div>
      );
    });
    rows.push(buttonRow);
  }

  // Create buttons [0, '.', '00']
  const misc = Misc.map((value) => {
    return (
      <div key={`col-misc-${value.id}`} className="column">
        <Buttons
          key={value.id}
          handleButton={props.handleButton}
          {...value}
        />
      </div>
    );
  });
  rows.push(misc);

  return rows;
}

/**
 * Creates keypad component of the calculator
 * @param {React.props} props
 * @return {React.Component} Keypad component
 */
function Keypad(props) {
  const rows = createKeypad(props);
  const keypadRows = rows.map((row, index) => {
    return (
      <div key={`row-${index}`} className="btn-group">{row}</div>
    );
  });

  return (
    <div className="container">
      {keypadRows}
    </div>
  );
}

export default Keypad;
