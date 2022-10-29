import React from 'react';
import classes from "./ExportPage.module.css";
import InputFile from "../../UI/InputFile/InputFile";

const ExportPage = () => {
    return (
        <div className={classes.ExportPage}>
            <div className={classes.ExportPageText}>Загрузите список квартир</div>
            <InputFile />
        </div>
    );
};

export default ExportPage;