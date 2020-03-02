import React from 'react';

const Row = ({ dateWiseInfo }) => {
  const {
    conversation_count,
    missed_chat_count,
    visitors_with_conversation_count,
    date
  } = dateWiseInfo;
  return (
    <tr>
      <th scope='row'>{conversation_count}</th>
      <td>{missed_chat_count}</td>
      <td>{visitors_with_conversation_count}</td>
      <td>{date}</td>
    </tr>
  );
};

export default Row;
