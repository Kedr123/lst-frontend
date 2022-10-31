import React, {useState} from 'react';
import classes from './ListApartmentsPage.module.css'
import SearchBlock from "../../UI/SearchBlock/SearchBlock";
import Table from "../../UI/Tables/Table/Table";

const ListApartmentsPage = () => {

    const [search, setSearch] = useState({text:'7', title:0})

    const searchTitles = [
        'Местоположение',
        'Количество\nкомнат',
        'Сегмент',
        'Этажность\n дома',
        'Материал\n стен',
        'Этаж\n расположения',
        'Площадь квартиры, кв.м',
        'Площадь кухни, кв.м',
        'Наличие\n балкона/лоджии',
        'Удаленность от станции метро, мин. пешком',
        'Состояние'
    ]

    return (
        <div className={classes.ListApartmentsPage}>
            <SearchBlock searchTitles={searchTitles} searchTable={search} setSearchTable={setSearch} />
            <Table search={search} />
        </div>
    );
};

export default ListApartmentsPage;