import List from "../components/list/List";
import UserButton from "../components/button/UserButton";
import { AuthContext } from "../context";
import { useContext, useState } from "react";
import "../styles/Main.css";
import ModalAddLink from "../components/modal/ModalAddLink";

const Main = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    function logout() {
        localStorage.removeItem("access_token");
        setIsAuth(false);
    }

    function closeModal() {
        setIsOpen(false);
    }
    
    function openModal() {
        setIsOpen(true);
    }

    return (
        <div className="main">
            <div className="out-btn-wrapper">
                <UserButton onClick={ logout } addClass="out-btn">Выйти</UserButton>
            </div>
            <List openModal={ openModal }/>
            <div onClick={ closeModal } className={ "modal-wrapper" + " " + (isOpen ? "isopen" : "") }>
                <ModalAddLink closeModal={ closeModal }/>
            </div>
        </div>
    );
};


export default Main;