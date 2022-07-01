import React from "react";
import style from './Ingredient.module.css'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function Ingredient (props) {
    return (
        <div className={props.class} key={props.index}>
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