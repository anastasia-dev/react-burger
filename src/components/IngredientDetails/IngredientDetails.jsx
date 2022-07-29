import React from "react";
import style from './IngredientDetails.module.css'
import {IngridientPropType} from "../../types/Ingredients";
import {useSelector} from "react-redux";


IngredientDetails.propTypes = {
    dataContent: IngridientPropType.isRequired
};

function IngredientDetails () {
    const data = useSelector(state => state.detailsItem.item);
    return (data?.length &&
        <div className={style.ingredientBox}>
            <header>
                <section className={style.image}>
                    <img src={data.image_large} alt={data.name} />
                </section>
                <section className={style.name}>
                    <p className="text text_type_main-medium">{data.name}</p>
                </section>
            </header>
            <main className={style.ingredientCaption}>
                <section className={style.elemCaption}>
                    <p className="text text_type_main-small">Калории, ккал</p>
                    <p className="text text_type_digits-default">{data.calories}</p>
                </section>
                <section className={style.elemCaption}>
                    <p className="text text_type_main-small">Белки, г</p>
                    <p className="text text_type_digits-default">{data.carbohydrates}</p>
                </section>
                <section className={style.elemCaption}>
                    <p className="text text_type_main-small">Жиры, г</p>
                    <p className="text text_type_digits-default">{data.fat}</p>
                </section>
                <section className={style.elemCaption}>
                    <p className="text text_type_main-small">Углеводы, г</p>
                    <p className="text text_type_digits-default">{data.proteins}</p>
                </section>
            </main>
        </div>
    )
}

export default IngredientDetails