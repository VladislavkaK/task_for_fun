import React from 'react';

const Input = ({ type, name, label, value, onChange }) => {
    return (
        <div className="input__field">
            <label className="label" >
                {label}
            </label><br />
            <input type={type} name={name} value={value} onChange={onChange} />
            
        </div>
    )
} 

export default Input;