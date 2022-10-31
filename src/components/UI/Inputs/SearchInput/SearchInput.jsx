import React from 'react';
import classes from './SearchInput.module.css'

const SearchInput = ({placeholder = '', value, setValue, size = '16px', type = 'text', }) => {
    return (
        <input type={type} placeholder={placeholder} className={classes.SearchInput} style={{fontSize:size}} value={value} onChange={event => setValue(event.target.value)} />
    );
};

export default SearchInput;