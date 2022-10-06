import React from "react";
import style from './Ingredient.module.css'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrag} from "react-dnd";
import {IProps} from "../../../interfaces/IProps";

function Ingredient (props: IProps)   {
    const id = props.item._id;
    const [, dragRef] = useDrag({
        type: "draggableIngredient",
        item: { id }
    });

    return (
        <div className={props.class} key={props.item._id} ref={dragRef} onClick={(e) => props.funkClick(props.item)}>
            {props.item.count > 0 &&
                <Counter count = {props.item.count} size={"default"} />
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