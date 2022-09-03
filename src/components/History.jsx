import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

/**
 * Calculation history
 * @param {React.props} props
 * @return {React.Component} history dropdown
 */
function History(props) {
  const historyList = () => {
    return props.history.map((history, index) => {
      const {expression, answer} = history;
      return (
        <Dropdown.Item
          key={`${index}:${expression}=${answer}`}
        >
          {`${expression} = ${answer}`}
        </Dropdown.Item>
      );
    });
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        History
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {historyList()}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default History;
