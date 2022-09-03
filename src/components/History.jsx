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
      <a
        key={`${index}:${expression}=${answer}`}
        onClick={() => props.handleButton(answer)}
      >
        {`${expression} = ${answer}`}
      </a>
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
      <button className="dropbtn">History</button>
      <div className="dropdown-content">
        {historyList}
      </div>
    </div>
  );
}

export default History;
