import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Service from "../API/Service";
import { AuthContext } from "../context";
import "../styles/App.css";
import "../styles/Authorization.css";
import UserButton from "../components/button/UserButton";

const Authorization = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');

    let token;

    async function authorization(e) {
        e.preventDefault();
        const res = await Service.login(login, password);
        if (res?.access_token) {
            token = res.access_token;
            localStorage.setItem('access_token', token);
            localStorage.setItem('token_type', res?.token_type);
            setIsAuth(true);
        } else {
            alert('Ошибка логина или пароля!');
        }
    }

    return (
        <div className="Authorization">
            <h2>Авторизация</h2>
            <form className="Authorization__form" onSubmit={ authorization }>
                <input className="input-text" type="text" value={ login } onChange={ e => setLogin(e.target.value) } placeholder="Введите логин"/>
                <input className="input-text" type="password" value={ password } onChange={ e => setPassword(e.target.value) } placeholder="Введите пароль"/>
                <UserButton>Войти</UserButton>
            </form>
            <Link className="link" to='/registration'>Регистрация</Link>
        </div>
    );
};

export default Authorization;