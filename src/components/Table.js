import React from 'react';
import Row from './Row';

const Table = ({ currentRows }) => {

  return (
    <table className='table'>
      <thead className='thead-dark'>
        <tr>
          <th scope='col'>conversation_count</th>
          <th scope='col'>missed_chat_count</th>
          <th scope='col'>visitors_with_conversation_count</th>
          <th scope='col'>
            Date <button className='App-button'>Asc</button>
          </th>
        </tr>
      </thead>

      <tbody>
        {currentRows.map((dateWiseInfo, i) => (
          <Row key={i} dateWiseInfo={dateWiseInfo} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
