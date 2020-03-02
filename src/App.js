import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Card from './components/Card';
// import AuthToken from './components/AuthToken';
import Form from './components/Form';
import Pagination from './components/Pagination';
import './App.css';
import axios from 'axios';

const App = () => {
  // replace defaultToken = AuthToken  to defaulToken = 'newNumber' with new access token
  const defaultToken = AuthToken;
  const baseTokenLength = defaultToken.length;
  const baseDateLength = 10;
  const [startDate, setStartDate] = useState('2017-05-01');
  const [endDate, setEndDate] = useState('2017-06-01');
  const [token, setToken] = useState(defaultToken);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [url, setUrl] = useState(`https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${startDate}&end_date=${endDate}`);
  const [output, setOutput] = useState({});
  const [outputByDate, setOutputByDate] = useState([]);
  const [rowsPerPage] = useState(5);
  const [headers, setHeaders] = useState({
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    }
  });

  useEffect(() => {
    const setHeaders = async () => {
      setLoading(true);
      const res = await axios.get(url, headers);
      setOutput(res.data);
      setOutputByDate(res.data.by_date);
      setLoading(false);
    };
    setHeaders();
  }, [url, headers]);

  //Get current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = outputByDate.slice(indexOfFirstRow, indexOfLastRow);
  //Change pages
  const paginate = pageNumber => setCurrentPage(pageNumber);

  //Input field of startDate, EndDate or Access token is changed, onchange functions on input
  const setStart = e => {
    const newDate = e.target.value;
    setStartDate(newDate);
    if (newDate.length === baseDateLength && startDate <= endDate) {
      setUrl(
        `https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${newDate}&end_date=${endDate}`
      );
    }
  };

  const setEnd = e => {
    const newDate = e.target.value;
    setEndDate(newDate);
    if (newDate.length === baseDateLength) {
      setUrl(
        `https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${startDate}&end_date=${newDate}`
      );
    }
  };

  const setAuthToken = e => {
    const newToken = e.target.value;
    setToken(newToken);
    if (newToken.length === baseTokenLength) {
      setHeaders({ ...headers, Authorization: `Bearer ${newToken}` });
    }
  };

  const fetchApidata = e => {
    e.preventDefault();
  };

  console.log('Loading......', loading);
  console.log('_______Data________', output);
  console.log('By date', outputByDate);
  console.log('Is byDate and array ? : ', Array.isArray(outputByDate));

  return (
    <div className='container mt-5'>
      <h1 className='App-title'>Request giosg API</h1>
      <Form className='App-form row' fetchApidata={fetchApidata} startDate={startDate} endDate={endDate} setStart={setStart} setEnd={setEnd} token={token} defaultToken={defaultToken} setAuthToken={setAuthToken} onSubmit={fetchApidata}/>    
     {/* Error message */}
      <strong style={{ color: 'red' }}>
        {startDate < '2017-05-01' ||
        startDate > '2017-06-15' ||
        startDate > endDate ||
        endDate > '2017-06-15' ||
        endDate < '2017-05-01'
          ? 'Acceptable date : 2017-05-01 to 2017-06-15'
          : ''}
      </strong>

      <div className='App-card-row row'>
        <Card title={'Total conversation count'} count={output.total_conversation_count}/>
        <Card title={'Total user message count'} count={output.total_user_message_count}/>
        <Card title={'Total visitor message count'} count={output.total_visitor_message_count}/>
      </div>

      <div className='App-table'>
        <Table currentRows={currentRows}/>
        <Pagination rowsPerPage={rowsPerPage} totalRows={outputByDate.length} paginate={paginate}
        />
      </div>
    </div>
  );
};

export default App;
