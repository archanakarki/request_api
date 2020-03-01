import React from 'react';
import Row from './Row'

const Table = ({rows}) => {
  console.log("Rows", rows)
  return (
    <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">conversation_count</th>
      <th scope="col">missed_chat_count</th>
      <th scope="col">visitors_with_conversation_count</th>
      <th scope="col">Date <button>Asc</button></th>
    </tr>
  </thead>
  <tbody>
    <td>Row row</td>
  </tbody>
  </table>


    )}
  

export default Table;
