import React from 'react';

/**
 * Creates dropdown item for history
 * @param {React.props} props
 * @return {React.Component} dropdown items
 */
function createHistoryList(props) {
  const historyList = props.history.map((history, index) => {
    const {expression, answer} = history;
    return (
      <li key={`${index}:${expression}=${answer}`}>
        <a
          className="dropdown-item"
          onClick={() => props.handleButton(answer)}
        >
          {`${expression} = ${answer}`}
        </a>
      </li>
    );
  });

  return historyList;
}

/**
 * Calculation history
 * @param {React.props} props
 * @return {React.Component} history dropdown
 */
function History(props) {
  const historyList = createHistoryList(props);

  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        type="button"
      >
        History
      </button>
      <ul className="dropdown-menu">
        {historyList}
      </ul>
    </div>
  );
}

export default History;
