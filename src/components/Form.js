import React from 'react'
import Input from './Input'

const Form = ({fetchApidata,startDate, endDate, token, setStart, setEnd, setAuthToken, defaultToken }) => {
    return (
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
    )
}

export default Form
