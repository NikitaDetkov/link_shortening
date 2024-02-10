import { useState } from "react";
import Service from "../../API/Service";
import "../../styles/App.css";
import UserButton from "../button/UserButton";
import classes from "./ModalAddLink.module.css";

const ModalAddLink = ({closeModal}) => {

    const [newLink, setNewLink] = useState('');

    function addNewLink() {
        Service.addLink(newLink).then(res => {
            if (res?.error) {
                alert('Ошибка добавления!');
            } else {
                alert('Ссылка добавлена! id: ' + res.id);
                closeModal();
            }
        });
    }

    return (
        <div onClick={(e) => { e.stopPropagation() }} className={ classes.modal }>
            <div className={ classes.modal__header }>
                <h3>Ссылка для добавления</h3>
                <button onClick={ closeModal } className={ classes.modal__btn_close }>&times;</button>
            </div>
            <input value={ newLink } onChange={ e => setNewLink(e.target.value) } className="input-text" placeholder="Введите ссылку"/>
            <UserButton onClick={ () => { addNewLink() } }>Добавить</UserButton>
        </div>
    );
}


export default ModalAddLink;