import React from 'react';

import './styles/style.scss';

const Button = ({ name, color, onClick }) => {

    let classColor = "";

    if (color === "red") {
        classColor = "button__red";
    } else if (color === "green") {
        classColor = "button__green";
    } if (color === "blue") {
        classColor = "button__blue";
    }

    return (
        <button type="submit" className={classColor} onClick={onClick} >{name}</button>
    )
}

export default Button;