import React from "react";
import style from './IngredientDetails.module.css'
import {useParams} from "react-router-dom";
import {IIngredient} from "../../interfaces/IIngredient";
import { useAppSelector } from "../../services/hooks";


function IngredientDetails () {
    const { id } = useParams();
    const items = useAppSelector(store => store.ingredients);
    const data = items.dataContent?.find(elem => elem._id === id);

    if (data) {
        return (<div className={style.ingredientBox}>
            <h1>
                <section className={style.image}>
                    <img src={data.image_large} alt={data.name} />
                </section>
                <section className={style.name}>
                    <p className="text text_type_main-medium">{data.name}</p>
                </section>
            </h1>
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
        </div>);
    }
    return null;
}

export default IngredientDetails