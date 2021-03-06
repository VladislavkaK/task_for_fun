import React from 'react';

const Input = ({ type, name, label, value, onChange, showError }) => {
    return (
        <div className="input__field">
            <label className="label" >
                {label}
            </label><br />
            <input type={type} name={name} value={value} onChange={onChange} />
            {showError && <p className="error__message" >Заголовок не может быть пустым.</p>}   
        </div>
    )
} 

export default Input;