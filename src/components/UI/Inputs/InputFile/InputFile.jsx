import React, {useState} from 'react';
import classes from './InputFile.module.css';
import icon from '../../../../assets/img/uploadIcon.svg'

const InputFile = () => {

    const [fileName, setFileName] = useState('Добавить файл')

    const getFile = (e) => {
        setFileName(e.target.files[0].name)
    }

    return (
        <div className={classes.example1}>
            <div className={classes.formGgroup}>
                <label className={classes.label}>
                    <span className={classes.title}>{fileName}</span>

                    <i className={classes.materialIcons}>
                        <img src={icon} alt=""/>
                    </i>

                    <input type='file' onChange={event => getFile(event)}/>
                </label>
            </div>
        </div>
    );
};

export default InputFile;