import React from 'react'

const Input = ({htmlFor, id, type, value, placeholder, onSubmit, onChange}) => {
    return (
            <input type={type} value={value} onChange={onChange} placeholder={placeholder} minLength="10" maxLength="10" required />
    )
}

export default Input
