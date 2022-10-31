import React from 'react';
import classes from './TableButton.module.css'

const TableButton = ({value='кнопка'}) => {
    return (
        <input className={classes.TableButton} value={value} type="button" />
    );
};

export default TableButton;