import React from "react";
import Ingredient from "./Ingredient/Ingredient";
import Tabs from "./Tabs/Tabs";
import style from './BurgerIngredients.module.css'
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import PropTypes from "prop-types";
import {IngridientPropType} from "../../types/Ingredients";

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(IngridientPropType.isRequired).isRequired
};

function BurgerIngredients (props) {
    const dataContent = props.data;
    const [focusIngredient, setFocusIngredient] = React.useState(null)

    return (
        <div className={style.container}>
            {focusIngredient != null && (
                <Modal title="Детали ингредиента" close={() => setFocusIngredient(null)}>
                    <IngredientDetails dataContent={focusIngredient} />
                </Modal>)
            }
            <section className={style.containerCaption}>
                <p className="text text_type_main-large">Соберите бургер</p>
            </section>
            <section className={style.tabsSection}>
                <Tabs />
            </section>
            <section className={style.ingredients}>
                <section className={style.ingredientsName}>
                    <p className="text text_type_main-medium">Булки</p>
                </section>
                {dataContent.map((elem, index) => (
                    elem.type === 'bun' && <Ingredient class={style.ingredient} key={index} item={elem} funkClick={() => setFocusIngredient(elem)} />
                ))}
                <section className={style.ingredientsName}>
                    <p className="text text_type_main-medium">Соусы</p>
                </section>
                {dataContent.map((elem, index) => (
                    elem.type === 'sauce' &&  <Ingredient  class={style.ingredient} key={index} item={elem} funkClick={() => setFocusIngredient(elem)} />
                ))}
                <section className={style.ingredientsName}>
                    <p className="text text_type_main-medium">Начинки</p>
                </section>
                {dataContent.map((elem, index) => (
                    elem.type === 'main' && <Ingredient class={style.ingredient} key={index} item={elem} funkClick={() => setFocusIngredient(elem)} />
                ))}
            </section>
        </div>

    );
}

export default BurgerIngredients;