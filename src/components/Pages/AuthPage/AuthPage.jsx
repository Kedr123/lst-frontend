import React, {useState} from 'react';
import classes from "./AuthPage.module.css";
import iconAuth from "./../../../assets/img/icon_auth.svg"
import imgAuth from "./../../../assets/img/img_auth.png"
import AuthInput from "../../UI/AuthInput/AuthInput";
import AuthButton from "../../UI/AuthButton/AuthButton";

const AuthPage = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const setForm = () =>{
        console.log(login+' || '+password)
    }

    return (
        <div className={classes.AuthPage}>
            <div className={classes.iconAuth}>
                <img src={iconAuth} alt=""/>
            </div>

            <div className={classes.authForm}>
                <AuthInput placeholder={'Логин'} size={'16px'} input={login} setInput={setLogin}/>
                <AuthInput placeholder={'Пароль'} size={'16px'} input={password} setInput={setPassword}/>
                <div className={classes.authButton}>
                    <AuthButton value={'Войти'} width={'70%'} onClick={setForm}/>
                </div>

            </div>

            {/*<div className={classes.imgAuth}>*/}
            <img className={classes.imgAuth} src={imgAuth} alt=""/>
            {/*</div>*/}

        </div>
    );
};

export default AuthPage;