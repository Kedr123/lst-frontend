import React from 'react';
import classes from './SearchSelectInput.module.css'

const SearchSelectInput = ({value, setValue, listValue = ['gkbsfd', 'dsfsfsd']}) => {


    return (
        <select onChange={event => setValue(event.target.value)} className={classes.SearchSelectInput}>
            {
                listValue.map((lv, index)=>
                    <option value={index} key={lv}>{lv}</option>
                )
            }

        </select>
    );
};

export default SearchSelectInput;