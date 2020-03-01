import React from 'react'
import './Input.css'

const Input = ({htmlFor, id, type, value, placeholder, onSubmit, onChange}) => {
    return (
            <input className="App-input col-sm-3 col-md-3 col-lg-4 col-lg-4" type={type} value={value} onChange={onChange} placeholder={placeholder} minLength="10" required />
    )
}
export default Input
