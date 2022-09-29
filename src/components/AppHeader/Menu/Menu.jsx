import React from "react";
import style from "./Menu.module.css";
import {BurgerIcon, ListIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

Menu.propTypes = {
    text: PropTypes.string.isRequired
};

function Menu(props) {
    let current = false;
    if ((props.text === "Конструктор" && props.location === '/') || (props.text === "Лента заказов" && props.location === '/order-history')) current = true;
    return (
        <section className={style.menu}>
            <Link to={props.text === "Конструктор" ? "/" : "/order-history"}>
                {current ? <BurgerIcon type="primary"/> : <ListIcon type="secondary"/>}
                <p className={`text text_type_main-default ${current ? style.active : ""}`}>{props.text}</p>
            </Link>
        </section>
    );
}


export default Menu;