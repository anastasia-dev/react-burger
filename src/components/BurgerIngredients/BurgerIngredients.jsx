import React from "react";
import Ingredient from "./Ingredient/Ingredient";
import Tabs from "./Tabs/Tabs";
import style from './BurgerIngredients.module.css'
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import PropTypes from "prop-types";
import {IngridientPropType} from "../../types/Ingredients";
import {useDispatch, useSelector} from "react-redux";
import {HIDE_INGREDIENT_DETAILS, SHOW_INGREDIENT_DETAILS} from "../../services/actions/ingredientDetails";
import {SET_ACTIVE_TAB } from "../../services/actions/activeTab";
import {ADD_INGREDIENT, SET_BUN} from "../../services/actions/constructor";
import {INCREASE_ITEM_COUNT} from "../../services/actions/ingredients";



BurgerIngredients.propTypes = {
    dataContent: PropTypes.arrayOf(IngridientPropType.isRequired)
};


function BurgerIngredients () {

    const ingredients  = useSelector(state => state.ingredients);
    const detailsItem  = useSelector(state => state.detailsItem.item);
    const dispatch = useDispatch();
    const ref = React.useRef(null);
    const refBuns = React.useRef(null);
    const refSauces = React.useRef(null);
    const refMains = React.useRef(null);

    const showItemDetails = (elem) => {
        dispatch({
            type: SHOW_INGREDIENT_DETAILS,
            item: elem
        });
    }

    const closeItemDetails = () => {
        dispatch({
            type: HIDE_INGREDIENT_DETAILS
        });
    }

    const onScroll = () => {
        const height = ref.current.getBoundingClientRect().y;
        let arrayCoords = [
            { dist: Math.abs(refBuns.current.getBoundingClientRect().y - height), tab: "one" },
            { dist: Math.abs(refSauces.current.getBoundingClientRect().y - height), tab: "two" },
            { dist: Math.abs(refMains.current.getBoundingClientRect().y - height), tab: "three" },
        ]
        arrayCoords.sort((prev, next) => prev.dist - next.dist );
        dispatch({
            type: SET_ACTIVE_TAB,
            activeTab: arrayCoords[0].tab
        });
    }


    return (
        !ingredients.ingredientsLoading &&
        <section className={style.container}>
            {
                detailsItem &&
                (<Modal title="Детали ингредиента" close={closeItemDetails}>
                        <IngredientDetails dataContent={detailsItem} />
                </Modal>)
            }
            <section className={style.containerCaption}>
                <p className="text text_type_main-large">Соберите бургер</p>
            </section>
            <section className={style.tabsSection} ref={ref}>
                <Tabs />
            </section>
            <section className={style.ingredients} onScroll={onScroll}>
                <section className={style.ingredientsName} ref={refBuns}>
                    <p className="text text_type_main-medium">Булки</p>
                </section>
                {ingredients.dataContent.map((elem, index) => (
                    elem.type === 'bun' && <Ingredient class={style.ingredient} key={elem._id} item={elem} funkClick={() => showItemDetails(elem)} />
                ))}
                <section className={style.ingredientsName} ref={refSauces}>
                    <p className="text text_type_main-medium">Соусы</p>
                </section>
                {ingredients.dataContent.map((elem, index) => (
                    elem.type === 'sauce' &&  <Ingredient  class={style.ingredient} key={elem._id} item={elem} funkClick={() => showItemDetails(elem)} />
                ))}
                <section className={style.ingredientsName} ref={refMains}>
                    <p className="text text_type_main-medium">Начинки</p>
                </section>
                {ingredients.dataContent.map((elem, index) => (
                    elem.type === 'main' && <Ingredient class={style.ingredient} key={elem._id} item={elem} funkClick={() => showItemDetails(elem)} />
                ))}
            </section>
        </section>
    );
}

export default BurgerIngredients;