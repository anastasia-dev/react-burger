import React from "react";
import style from "./AppHeader.module.css";
import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";
import Profile from "./Profile/Profile";
import {useLocation} from "react-router-dom";

function AppHeader () {

    const location = useLocation();

    return (
        <header className={style.MainHeader}>
            <section className={style.MainContainer}>
                <section className={style.MainMenu}>
                    <Menu text="Конструктор" location={location.pathname} />
                    <Menu text="Лента заказов" location={location.pathname} />
                </section>
                <Logo />
                <Profile location={location.pathname as string} />
            </section>
        </header>
    );
}

export default AppHeader;