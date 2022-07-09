import React from "react";
import style from "./AppHeader.module.css";
import Menu from "../AppHeader/Menu/Menu";
import Logo from "../AppHeader/Logo/Logo";
import Profile from "../AppHeader/Profile/Profile";

function AppHeader () {
    return (
        <header className={style.MainHeader}>
            <section className={style.MainContainer}>
                <section className={style.MainMenu}>
                    <Menu text="Конструктор" />
                    <Menu text="Лента заказов" />
                </section>
                <Logo />
                <Profile />
            </section>
        </header>
);
}

export default AppHeader;