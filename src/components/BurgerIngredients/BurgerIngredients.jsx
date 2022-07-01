import React from "react";
import Ingredient from "./Ingredient/Ingredient";
import Tabs from "./Tabs/Tabs";
import style from './BurgerIngredients.module.css'
import data from '../../utils/data.json'


function BurgerIngredients () {
    const [dataContent] = React.useState(data);
    return (
        <div className={style.container}>
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
                    elem.type === 'bun' && <Ingredient class={style.ingredient} key={index} item={elem} />
                ))}
                <section className={style.ingredientsName}>
                    <p className="text text_type_main-medium">Соусы</p>
                </section>
                {dataContent.map((elem, index) => (
                    elem.type === 'sauce' &&  <Ingredient  class={style.ingredient} key={index} item={elem} />
                ))}
                <section className={style.ingredientsName}>
                    <p className="text text_type_main-medium">Начинки</p>
                </section>
                {dataContent.map((elem, index) => (
                    elem.type === 'main' && <Ingredient class={style.ingredient} key={index} item={elem} />
                ))}
            </section>
        </div>
    );
}

export default BurgerIngredients;