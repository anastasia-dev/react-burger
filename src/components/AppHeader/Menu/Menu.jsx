import React from "react";
import style from "./Menu.module.css";
import {BurgerIcon, ListIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

Menu.propTypes = {
    text: PropTypes.string.isRequired
};

function Menu(props) {
    return (
        <section className={style.menu}>
            <a href="#">
                {props.text === "Конструктор" ? <BurgerIcon type="primary"/> : <ListIcon type="secondary"/>}
                <p className="text text_type_main-default">{props.text}</p>
            </a>
        </section>
    );
}


export default Menu;