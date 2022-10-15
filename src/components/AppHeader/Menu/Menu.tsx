import React from "react";
import style from "./Menu.module.css";
import {BurgerIcon, ListIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {IMenu} from "../../../interfaces/IMenu";

function Menu(props: IMenu) {
    let current: boolean = false;
    if ((props.text === "Конструктор" && props.location === '/') || (props.text === "Лента заказов" && props.location === '/feed')) current = true;
    return (
        <section className={style.menu}>
            <Link to={props.text === "Конструктор" ? "/" : "/feed"}>
                {current ? <BurgerIcon type="primary"/> : <ListIcon type="secondary"/>}
                <p className={`text text_type_main-default ${current ? style.active : ""}`}>{props.text}</p>
            </Link>
        </section>
    );
}


export default Menu;