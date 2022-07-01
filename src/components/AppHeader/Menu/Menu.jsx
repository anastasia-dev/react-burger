import React from "react";
import style from "./Menu.module.css";
import {BurgerIcon, ListIcon} from "@ya.praktikum/react-developer-burger-ui-components";


function Menu(props) {
    return (
        <section className={style.menu}>
            {props.text === "Конструктор" ? <BurgerIcon type="primary"/> : <ListIcon type="secondary"/>}
            <p className="text text_type_main-default">{props.text}</p>
        </section>
    );
}


export default Menu;