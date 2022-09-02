import React from 'react';

/**
 * A button on the calculator
 * @param {React.props} props
 * @return {React.Component} Button
 */
function Buttons(props) {
  return (
    <button>
      {props.label}
    </button>
  );
}

export default Buttons;
