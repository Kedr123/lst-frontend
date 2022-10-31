import React from 'react';
import classes from './TableItems.module.css';
import TableItem from "./TableItem/TableItem";

const TableItems = ({items = [
    ['adaf', 'adfasfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
    ['adaf', 'adfasfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
    ['adaf', 'adfasfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
    ['adaf', 'adfasfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
    ['a', 'adf', 'dsafas', 'adffjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj', 'dasfdsfkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf']]}) => {



    return (
        <div className={classes.TableItems}>
            {
                items.map((item, index) =>
                    !(index % 2 == 0) ?
                        <TableItem item={item} itemId={index} backgroundColor='#FFEDED'/>
                        :
                        <TableItem item={item} itemId={index} backgroundColor='#ffffff'/>
                )
            }
        </div>
    );
};

export default TableItems;