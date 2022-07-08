import React from "react";
import style from './IngredientDetails.module.css'

function IngredientDetails (props) {
    return (props.dataContent &&
        <div className={style.ingredientBox}>
            <header>
                <section className={style.image}>
                    <img src={props.dataContent.image_large} alt={props.dataContent.name} />
                </section>
                <section className={style.name}>
                    <p className="text text_type_main-medium">{props.dataContent.name}</p>
                </section>
            </header>
            <main className={style.ingredientCaption}>
                <section className={style.elemCaption}>
                    <p className="text text_type_main-small">Калории, ккал</p>
                    <p className="text text_type_digits-default">{props.dataContent.calories}</p>
                </section>
                <section className={style.elemCaption}>
                    <p className="text text_type_main-small">Белки, г</p>
                    <p className="text text_type_digits-default">{props.dataContent.carbohydrates}</p>
                </section>
                <section className={style.elemCaption}>
                    <p className="text text_type_main-small">Жиры, г</p>
                    <p className="text text_type_digits-default">{props.dataContent.fat}</p>
                </section>
                <section className={style.elemCaption}>
                    <p className="text text_type_main-small">Углеводы, г</p>
                    <p className="text text_type_digits-default">{props.dataContent.proteins}</p>
                </section>
            </main>
        </div>
    )
}

export default IngredientDetails