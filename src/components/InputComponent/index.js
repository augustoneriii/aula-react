import React from 'react'

function InputComponent({ label, type, placeholder }) {
    return (
        <div style={{display: 'flex'}}>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} />
        </div>
    )
}

export default InputComponent