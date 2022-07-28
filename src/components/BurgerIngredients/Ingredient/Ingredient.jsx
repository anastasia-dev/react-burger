import React from "react";
import style from './Ingredient.module.css'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {IngridientPropType} from "../../../types/Ingredients";

Ingredient.propTypes = {
    item: IngridientPropType.isRequired,
    class: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

function Ingredient (props) {
    return (
        <div className={props.class} key={props._id} onClick={props.funkClick}>
            <Counter count={Math.round(1 + Math.random() * (10 - 1))}/>
            <img alt={props.item.name} src={props.item.image_large}/>
            <section className={style.ingredientCaption}>
                <p className="text text_type_digits-default">{props.item.fat}</p>
                <CurrencyIcon type="primary" />
            </section>
            {props.item.name}
        </div>
    );
}


export default Ingredient;