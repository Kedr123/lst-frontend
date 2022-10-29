import React from 'react';
import classes from "./AuthInput.module.css";

const AuthInput = ({input, setInput, placeholder = '', size = '16px', type = 'text'}) => {
    return (
        <input type={type} placeholder={placeholder}  style={{fontSize:size}} className={classes.AuthInput} value={input} onChange={event => setInput(event.target.value)} />
    );
};

export default AuthInput;