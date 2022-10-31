import React, {useEffect, useMemo, useState} from 'react';
import classes from './TablePagination.module.css';
import ArrowRight from './../../../../../assets/img/ArrowRight.svg';
import ArrowLeft from './../../../../../assets/img/ArrowLeft.svg';

const TablePagination = ({setPage, page, countPages}) => {

    const [pages, setPages] = useState([]);

    const leftPage = () => {
        if (page > 0) setPage(page - 1);
    }

    const rightPage = () => {
        if (page < countPages - 1) setPage(page + 1);
    }

    useEffect(() => {
        setPages(() => {
            let p = [];

            if (countPages < 8) {
                for (let i = 0; i < countPages; i++) {
                    p.push(i);
                }
            } else if (page - 3 >= 0 && page + 4 <= countPages) {
                for (let i = page - 3; i < page + 4; i++) {
                    p.push(i);
                }
            } else if (page - 3 < 0) {
                for (let i = 0; i < 7; i++) {
                    p.push(i);
                }
            } else {
                for (let i = countPages - 7; i < countPages; i++) {
                    p.push(i);
                }
            }

            return p;
        })
    }, [page, countPages]);


    return (
        <div className={classes.TablePagination}>
            <div onClick={leftPage} className={classes.itemLeft}>
                <img src={ArrowLeft} alt=""/>
            </div>

            {
                pages.map(index =>
                    <div onClick={event => setPage(index)}
                         className={page == index ? classes.itemActive : classes.item}>{index + 1}</div>
                )
            }


            <div onClick={rightPage} className={classes.itemRight}>
                <img src={ArrowRight} alt=""/>
            </div>
        </div>
    );
};

export default TablePagination;