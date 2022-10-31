import React, {useState} from 'react';
import classes from "./AuthPage.module.css";
import iconAuth from "./../../../assets/img/icon_auth.svg"
import imgAuth from "./../../../assets/img/img_auth.png"
import AuthInput from "../../UI/Inputs/AuthInput/AuthInput";
import AuthButton from "../../UI/Buttons/AuthButton/AuthButton";

const AuthPage = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [response, setResponse] = useState(true);

    const setForm = () =>{
        console.log(login+' || '+password)



    }

    return (
        <div className={classes.AuthPage}>
            <div className={classes.iconAuth}>
                <img src={iconAuth} alt=""/>
            </div>

            <div className={classes.authForm}>
                <AuthInput placeholder={'Логин'}  input={login} setInput={setLogin}/>
                <AuthInput placeholder={'Пароль'} input={password} setInput={setPassword} type={'password'}/>
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