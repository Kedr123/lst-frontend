import React from 'react';
import classes from './TableTitle.module.css'

const TableTitle = ({titles = ['']}) => {
    return (
        <div className={classes.TableTitle}>
            {
                titles.map((title, index, titles) =>
                    index == titles.length-1 ?
                        <div className={classes.titleEnd} style={{width: 'calc(100%/' + titles.length + ')'}}>
                            {title}
                        </div>
                        :
                        <div className={classes.title} style={{width: 'calc(100%/' + titles.length + ')'}}>
                            {title}
                        </div>
                )
            }
        </div>
    );
};

export default TableTitle;