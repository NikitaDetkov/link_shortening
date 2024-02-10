import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Service from "../API/Service";
import UserButton from "../components/button/UserButton";
import '../styles/Registration.css';
import '../styles/App.css';

const Registration = () => {

    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');

    async function registration(e) {
        e.preventDefault();
        const res = await Service.registration(login, password);

        if (res?.username) {
            alert('Пользователь зарегистрирован!');
        } else {
            alert('Ошибка регистрации!');
        }
    }

    return (
        <div className="Registration">
            <h2>Регистрация</h2>
            <form className="Registration__form" onSubmit={ registration }>
                <input className="input-text" type="text" value={ login } onChange={ e => setLogin(e.target.value) } placeholder="Введите логин"/>
                <input className="input-text" type="password" value={ password } onChange={ e => setPassword(e.target.value) } placeholder="Введите пароль"/>
                <UserButton>Зарегистрироваться</UserButton>
            </form>

            <Link className="link" to='/authorization'>Вернуться</Link>
        </div>
    );
};

export default Registration;