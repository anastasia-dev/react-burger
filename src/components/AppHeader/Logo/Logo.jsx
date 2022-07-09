import React from "react";
import style from "./Logo.module.css"
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components'


function headerLogo () {
    return (
        <section className={style.logo}>
            <Logo />
        </section>
    );
}

export default headerLogo;