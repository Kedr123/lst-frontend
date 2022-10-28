import React from 'react';
import classes from "./Header.module.css";

const Header = () => {
    return (
        <div className={classes.Header}>
            <div className={classes.textHeader}>
                ГБУ «Аналитический центр»
            </div>
        </div>
    );
};

export default Header;