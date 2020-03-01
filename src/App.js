import React, { useState, useEffect } from 'react';
// import Table from './components/Table';
import Row from './components/Row'
import Card from './components/Card';
import AuthToken from './components/AuthToken';
import Input from './components/Input';
import Pagination from './components/Pagination'
import './App.css';
import axios from 'axios';


const App = () => {
  const defaultToken = AuthToken;
  const [startDate, setStartDate] = useState('2017-05-01');
  const [endDate, setEndDate] = useState('2017-06-01');
  const [token, setToken] = useState(defaultToken);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [url, setUrl] = useState(
    `https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${startDate}&end_date=${endDate}`
  );
  const [output, setOutput] = useState({});
  const [outputByDate, setOutputByDate] = useState([])
  const [rowsPerPage] = useState(5)
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
      setOutputByDate(res.data.by_date)
      setLoading(false);
    };
    setHeaders();
  }, [url, headers]);

  //Get current
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = outputByDate.slice(indexOfFirstRow, indexOfLastRow);
  //Change pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  //If startDate, EndDate or Access token is changed
  const setStart = e => {
    const newDate = e.target.value;
    setStartDate(newDate);
    setUrl(
      `https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${newDate}&end_date=${endDate}`
    );
  };

  const setEnd = e => {
    const newDate = e.target.value;
    setEndDate(newDate);
    setUrl(
      `https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${startDate}&end_date=${newDate}`
    );
  };

  const setAuthToken = e => {
    const newToken = e.target.value;
    setToken(newToken);
    setHeaders({ ...headers, Authorization: `Bearer ${newToken}` });
  };

  const fetchApidata = e => {
    e.preventDefault();
  };

  console.log('_______Data________', output);
  console.log("By date", outputByDate)
  console.log('Is byDate and array ? : ', Array.isArray(outputByDate))



  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Awesome react app</h1>
      {/* <p>{setStart || setEnd || setToken ? 'Date Format : 2017-06-05' : ''}</p> */}
      <form onSubmit={fetchApidata}>
        <Input
          type={'text'}
          value={startDate}
          placeholder={'2017-05-01'}
          onChange={setStart}
        />
        <Input
          type={'text'}
          value={endDate}
          placeholder={'2017-06-01'}
          onChange={setEnd}
        />
        <Input
          value={token === defaultToken ? '' : token}
          type={'text'}
          placeholder={defaultToken ? 'Access token' : ''}
          onChange={setAuthToken}
        />
      </form>

      <h4>{loading ? 'Loading data...' : ''}</h4>

      <div className='App-card-row'>
        <Card
          title={'Total conversation count'}
          count={output.total_conversation_count}
        />
        <Card
          title={'Total user message count'}
          count={output.total_user_message_count}
        />
        <Card
          title={'Total visitor message count'}
          count={output.total_visitor_message_count}
        />

      </div>

      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>conversation_count</th>
            <th scope='col'>missed_chat_count</th>
            <th scope='col'>visitors_with_conversation_count</th>
            <th scope='col'>
              Date <button>Asc</button>
            </th>
          </tr>
        </thead>

        <tbody>
          {currentRows.map(dateWiseInfo=> <Row dateWiseInfo={dateWiseInfo}/>)}
        </tbody>
      </table>

      {/* <Posts posts={currentPosts} loading={loading} /> */}
      <Pagination rowsPerPage={rowsPerPage} totalRows={outputByDate.length} paginate={paginate}/>  
  </div>
  );
};

export default App;
