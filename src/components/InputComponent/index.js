import React from 'react'

function InputComponent({ label, type, placeholder }) {
    return (
        <div className='input-group w-50'>
            <label className="input-group-text">{label}</label>
            <input className='form-control' type={type} placeholder={placeholder} />
        </div>
    )
}

export default InputComponent