import React, {ReactElement} from "react";
import Ingredient from "./Ingredient/Ingredient";
import Tabs from "./Tabs/Tabs";
import style from './BurgerIngredients.module.css'
import {SET_ACTIVE_TAB } from "../../services/actions/activeTab";
import {useLocation, useNavigate} from "react-router-dom";
import {IIngredient} from "../../interfaces/IIngredient";
import {ILocation} from "../../interfaces/ILocation";
import { useAppDispatch, useAppSelector } from "../../services/hooks";

function BurgerIngredients () {
    const ingredients  = useAppSelector(state => state.ingredients);
    const tabs  = useAppSelector(state => state.activeTab);
    const dispatch = useAppDispatch();
    const ref = React.useRef<HTMLDivElement | any>(null);
    const refBuns = React.useRef<HTMLDivElement | any>(null);
    const refSauces = React.useRef<HTMLDivElement | any>(null);
    const refMains = React.useRef<HTMLDivElement | any>(null);
    const navigate = useNavigate();
    const location = useLocation() as ILocation;

    const showItemDetails = (elem:IIngredient) => {
        navigate(`/ingredients/${elem._id}`, {state: { background: location }});
    }

    const onScroll = () => {
        const height: number = ref.current.getBoundingClientRect().y;
        let arrayCoords: {dist: number, tab: string}[] = [
            { dist: Math.abs(refBuns.current.getBoundingClientRect().y - height), tab: "one" },
            { dist: Math.abs(refSauces.current.getBoundingClientRect().y - height), tab: "two" },
            { dist: Math.abs(refMains.current.getBoundingClientRect().y - height), tab: "three" },
        ]
        arrayCoords.sort((prev, next) => prev.dist - next.dist );
        if (tabs.activeTab !== arrayCoords[0].tab)
            dispatch({
                type: SET_ACTIVE_TAB,
                activeTab: arrayCoords[0].tab
            });
    }

    let content: ReactElement = (<></>);

    if (ingredients.ingredientsFailed)
        content =
            (<section className={style.container}>
                <section className={style.containerCaption}>
                    <p className="text text_type_main-large">Не удалось получить данные ингредиентов</p>
                </section>
            </section>);
    else if (ingredients.ingredientsLoading)
        content = (<section className={style.container}>
            <section className={style.containerCaption}>
                <p className="text text_type_main-large">Данные загружаются...</p>
            </section>
        </section>);
    else
        content =
        (<section className={style.container}>
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
                {ingredients.dataContent?.map(elem => (
                    elem.type === 'bun' && <Ingredient class={style.ingredient} key={elem._id} item={elem} funkClick={() => showItemDetails(elem)} />
                ))}
                <section className={style.ingredientsName} ref={refSauces}>
                    <p className="text text_type_main-medium">Соусы</p>
                </section>
                {ingredients.dataContent?.map(elem => (
                    elem.type === 'sauce' &&  <Ingredient  class={style.ingredient} key={elem._id} item={elem} funkClick={() => showItemDetails(elem)} />
                ))}
                <section className={style.ingredientsName} ref={refMains}>
                    <p className="text text_type_main-medium">Начинки</p>
                </section>
                {ingredients.dataContent?.map(elem => (
                    elem.type === 'main' && <Ingredient class={style.ingredient} key={elem._id} item={elem} funkClick={() => showItemDetails(elem)} />
                ))}
            </section>
        </section>);

    return content;
}

export default BurgerIngredients;