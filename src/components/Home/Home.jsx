import React from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import style from "../App/App.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import {useDispatch} from "react-redux";
import {getIngredients} from "../../utils/getIngredients";

function Home() {
    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(getIngredients());
    },[]);
    return (
        <DndProvider  backend={HTML5Backend}>
            <main className={style.MainContainer}>
                <BurgerIngredients />
                <BurgerConstructor />
            </main>
        </DndProvider>
    )
}

export default Home;