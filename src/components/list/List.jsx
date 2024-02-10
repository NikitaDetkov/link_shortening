import Service from "../../API/Service";
import { useState, useEffect } from "react";
import classes from "./List.module.css";
import "../../styles/App.css";
import UserButton from "../button/UserButton";

const List = ({ openModal }) => {
    const [statistic, setStatistic] = useState([]);
    const [limit, setLimit] = useState(10);

    let offset = 0;

    function getData() {
        Service.getStatistic(limit, offset).then(data => {
            if (!data?.error) {
                setStatistic(data);
            }
        })
    }

    function sortData(key, direction) {
        const newArray = statistic.sort((a, b) => direction * ((a[key] > b[key]) ? 1 : -1));
        setStatistic([...newArray]);
    }

    function copy(str){
        let tmp   = document.createElement('INPUT'), 
        focus = document.activeElement;

        tmp.value = str;

        document.body.appendChild(tmp);
        tmp.select();
        document.execCommand('copy');
        document.body.removeChild(tmp);
    }

    useEffect(getData, []);

    return (
        <div className={ classes.list_wrapper }>
            <h2>Статистика</h2>
            <div className={ classes.header }>
                <h4>Лимит:</h4>
                <input type="text" value={ limit } onChange={ e => setLimit(e.target.value) } className="input-text" placeholder="Число записей"/>
                <UserButton onClick={ getData }>Получить данные</UserButton>
                <UserButton onClick={ openModal } >Добавить ссылку</UserButton>
            </div>

            <div className={ classes.list }>
                <div className={ classes.list__item + ' ' + classes.list__header }>
                    <div>
                        <h3>Id</h3>
                        <div className={ classes.container_btns }>
                            <UserButton onClick={ () => {sortData('id', 1)} } className={ classes.small_btn }>&uArr;</UserButton>
                            <UserButton onClick={ () => {sortData('id', -1)} } className={ classes.small_btn }>&dArr;</UserButton>
                        </div>
                    </div>
                    <div>
                        <h3>Переходы</h3>
                        <div className={ classes.container_btns }>
                            <UserButton onClick={ () => {sortData('counter', 1)} } className={ classes.small_btn }>&uArr;</UserButton>
                            <UserButton onClick={ () => {sortData('counter', -1)} } className={ classes.small_btn }>&dArr;</UserButton>
                        </div>
                    </div>
                    <div>
                        <h3>Короткая ссылка</h3>
                        <div className={ classes.container_btns }>
                            <UserButton onClick={ () => {sortData('short', 1)} } className={ classes.small_btn }>&uArr;</UserButton>
                            <UserButton onClick={ () => {sortData('short', -1)} } className={ classes.small_btn }>&dArr;</UserButton>
                        </div>
                    </div>
                    <div>
                        <h3>Ссылка</h3>
                        <div className={ classes.container_btns }>
                            <UserButton onClick={ () => {sortData('target', 1)} } className={ classes.small_btn }>&uArr;</UserButton>
                            <UserButton onClick={ () => {sortData('target', -1)} } className={ classes.small_btn }>&dArr;</UserButton>
                        </div>
                    </div>
                </div>
                {statistic.map(item =>
                    <div className={ classes.list__item } key={ item.id }>
                        <div className={ classes.list__item__id }>{ item.id }</div>
                        <div>{ item.counter }</div>
                        <div className={ classes.list__item__short }>
                            <button className={ classes.list__item__btn } 
                                onClick={ (e) => { copy('https://front-test.hex.team/s/' + item.short) } }>copy
                            </button>
                            { 'https://front-test.hex.team/s/' + item.short }
                        </div>
                        <div className={ classes.list__item__target }>{ item.target }</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default List;