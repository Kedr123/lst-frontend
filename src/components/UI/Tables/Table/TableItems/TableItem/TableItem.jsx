import React from 'react';
import classes from './TableItem.module.css';
import InputChek from "../../../../Inputs/InputChek/InputChek";
import TableButton from "../../../../Buttons/TableButton/TableButton";

const TableItem = ({item, backgroundColor = 'white'}) => {
    return (
        <div className={classes.TableItem} style={{backgroundColor: backgroundColor}}>
            {
                item.map((i) =>
                    <div className={classes.text} style={{
                        width: 'calc(100%/' + item.length + ')',
                        backgroundColor: backgroundColor
                    }}>
                        {i}
                    </div>
                )
            }

            <div className={classes.text} style={{
                width: 'calc(100%/' + item.length + ')',
                backgroundColor: backgroundColor
            }}>
                <InputChek />
            </div>

            <div className={classes.text} style={{
                width: 'calc(100%/' + item.length + ')',
                backgroundColor: backgroundColor
            }}>
                <TableButton />
            </div>

        </div>
    );
};

export default TableItem;