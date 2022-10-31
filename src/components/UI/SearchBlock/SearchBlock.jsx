import React, {useEffect, useState} from 'react';
import classes from './SearchBlock.module.css'
import SearchInput from "../Inputs/SearchInput/SearchInput";
import SearchSelectInput from "../Inputs/SearchSelectInput/SearchSelectInput";

const SearchBlock = ({searchTable, setSearchTable, searchTitles}) => {

    const [search, setSearch] = useState();
    const [searchSelect, setSearchSelect] = useState(0);

    useEffect(() => {

        setSearchTable({text: search, title: searchSelect});

    }, [search, searchSelect]);


    return (
        <div className={classes.SearchBlock}>
            <SearchInput value={search} setValue={setSearch} onCenge placeholder="Поиск"/>
            <SearchSelectInput listValue={searchTitles} value={searchSelect} setValue={setSearchSelect}/>
        </div>
    );
};

export default SearchBlock;