import React, {useEffect, useState} from 'react';
import classes from './Table.module.css';
import TableTitle from "./TableTitle/TableTitle";
import TableItems from "./TableItems/TableItems";
import TablePagination from "./TablePagination/TablePagination";

const Table = ({search}) => {

    const countPagePaginate = 10;

    const [page, setPage] = useState(0)

    const [items, setItems] = useState([
        ['1adaf'+search.text, 'adf56asfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
        ['2adaf', 'adfasfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
        ['3adaf', 'adfasfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
        ['4adaf', 'adfas2fsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
        ['5adaf', 'adfasfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
        ['6adaf', 'adfasfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
        ['7adaf', 'adfasfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
        ['8adaf', 'adfas26fsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
        ['9adaf', 'adfasfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
        ['10adaf', 'adfasfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
        ['11adaf', 'adfasfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
        ['12adaf', 'adfasfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
        ['13adaf', 'adfa52sfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
        ['14adaf', 'adfasfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
        ['15adaf', 'adfa5sfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
        ['16adaf', 'adfasfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
        ['17adaf', 'adfa2sfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
        ['18adaf', 'adfasfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
        ['19adaf', 'adfa6sfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
        ['20adaf', 'adfa6sfsa', 'dsafas', 'adfasdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf', 'dasfdsf'],
    ]);

    const [searchItems, setSearchItems] = useState([]);
    const [PageItems, setPageItems] = useState([]);
    const [countP, setCountP] = useState(0);



    let titles = [
        'Местоположение',
        'Количество\n комнат',
        'Сегмент',
        'Этажность\n дома',
        'Материал\n стен',
        'Этаж\n расположения',
        'Площадь квартиры, кв.м',
        'Площадь кухни, кв.м',
        'Наличие\n балкона/лоджии',
        'Удаленность от станции метро, мин. пешком',
        'Состояние',
        'Эталонный объект',
        'Расчитать'
    ]

    // Производит поиск
    useEffect(()=>{
        setSearchItems(()=>{
            let item = []

            if(!search.text) return items;

            for (let i=0; i<items.length; i++){
                if(items[i][search.title].toLowerCase().includes(search.text)) item.push(items[i])
            }
            return item;
        })
        setPage(0)
    },[search, items])

    // Разделяет элементы на страницы
    useEffect(()=>{
        setPageItems(()=>{
            let item = []
            for (let i=page*countPagePaginate; (i<searchItems.length) && (i<page*countPagePaginate+countPagePaginate); i++){
                item.push(searchItems[i])
            }
            return item;
        })
    },[page, searchItems])

    // Расчитывает количество страниц
    useEffect(()=>{
        setCountP(Math.ceil(searchItems.length/countPagePaginate))
    },[searchItems])




    return (
        <div className={classes.Table}>
            <TableTitle titles={titles}/>
            <TableItems items={PageItems}/>
            <TablePagination countPages={countP} page={page} setPage={setPage}/>
        </div>
    );
};

export default Table;