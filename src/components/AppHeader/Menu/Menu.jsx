import React from "react";
import style from "./Menu.module.css";
import {BurgerIcon, ListIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

Menu.propTypes = {
    text: PropTypes.string.isRequired
};

function Menu(props) {
    return (
        <section className={style.menu}>
            <Link to={props.text === "Конструктор" ? "/" : "/order-history"}>
                {props.text === "Конструктор" ? <BurgerIcon type="primary"/> : <ListIcon type="secondary"/>}
                <p className="text text_type_main-default">{props.text}</p>
            </Link>
        </section>
    );
}


export default Menu;