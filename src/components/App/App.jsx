import React from 'react';
import AppHeader from "../../components/AppHeader/AppHeader";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import style from "./App.module.css";
import {BurgerConstructorContext} from "../../services/BurgerConstructorContext";
import {BurgerIngredientsContext} from "../../services/BurgerIngredientsContext"

const getDataInfo = 'https://norma.nomoreparties.space/api/ingredients';

function App () {
    const [ingredients, setIngredients] = React.useState([]);

    React.useEffect( () => {
        fetch(getDataInfo)
            .then(r => {
                if (r.ok) {
                    return r.json();
                }
                return Promise.reject(`Произошла ошибка ${r.status}`);
            })
            .then(res => {
                if (res.success) {
                    setIngredients(res.data)
                } else {
                    return Promise.reject(`Произошла ошибка ${res.status}`);
                }
            })
            .catch (e => {
                alert(e);
            })
    }, [])

      return (
        <div className={style.App}>
          <AppHeader />
            <main className={style.MainContainer}>
                <BurgerIngredientsContext.Provider value={ingredients}>
                    <BurgerIngredients />
                </BurgerIngredientsContext.Provider>
                <BurgerConstructorContext.Provider value={ingredients}>
                    <BurgerConstructor />
                </BurgerConstructorContext.Provider>
            </main>
        </div>
      );
}

export default App;
