import React from 'react';
import AppHeader from "../../components/AppHeader/AppHeader";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import style from "./App.module.css";
import {useDispatch, useSelector} from "react-redux";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {getIngredients} from "../../utils/getIngredients";



function App () {
    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(getIngredients());
    },[]);

      return (
        <div className={style.App}>
          <AppHeader />
            <DndProvider  backend={HTML5Backend}>
                <main className={style.MainContainer}>
                    <BurgerIngredients />
                   {/* <BurgerConstructor />*/}
                </main>
            </DndProvider>
        </div>
      );
}

export default App;
