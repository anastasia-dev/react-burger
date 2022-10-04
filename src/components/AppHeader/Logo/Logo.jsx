import React from "react";
import style from "./Logo.module.css";
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import {Link} from "react-router-dom";


function headerLogo () {
    return (
        <section className={style.logo}>
            <Link to={"/"}> <Logo /></Link>
        </section>
    );
}

export default headerLogo;