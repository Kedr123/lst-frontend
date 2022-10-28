import React from 'react';
import classes from "./AuthButton.module.css";

const AuthButton = ({width, onClick, value}) => {
    return (
        <input type='button' onClick={event => onClick()} value={value} style={{width:width}} className={classes.AuthButton} />
    );
};

export default AuthButton;