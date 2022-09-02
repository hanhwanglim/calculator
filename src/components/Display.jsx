import React from 'react';

/**
 * Display area of the calculator
 * @param {React.props} props
 * @return {React.Component} Display area
 */
function Display(props) {
  return (
    <form>
      <input
        type="text"
        disabled={true}
        placeholder={props.display.join('')}
      />
    </form>
  );
}

export default Display;
