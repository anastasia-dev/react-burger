import React from "react";
import style from './Ingredient.module.css'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {IngridientPropType} from "../../../types/Ingredients";
import {useDrag} from "react-dnd";

Ingredient.propTypes = {
    item: IngridientPropType.isRequired,
    class: PropTypes.string.isRequired,
    onClick: PropTypes.func
}


function Ingredient (props) {
    const id = props.item._id;
    const [, dragRef] = useDrag({
        type: "draggableIngredient",
        item: { id }
    });

    return (
        <div className={props.class} key={props.item._id} ref={dragRef} onClick={props.funkClick}>
            {props.item.count > 0 &&
                <Counter count={props.item.count}/>
            }
            <img alt={props.item.name} src={props.item.image_large}/>
            <section className={style.ingredientCaption}>
                <p className="text text_type_digits-default">{props.item.price}</p>
                <CurrencyIcon type="primary" />
            </section>
            {props.item.name}
        </div>
    );
}


export default Ingredient;