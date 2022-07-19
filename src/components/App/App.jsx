import React from 'react';
import AppHeader from "../../components/AppHeader/AppHeader";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import style from "./App.module.css";
import {BurgerConstructorContext} from "../../services/BurgerConstructorContext";

const getDataInfo = 'https://norma.nomoreparties.space/api/ingredients';

function App () {
    const [state, setState] = React.useState([]);

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
                    setState(res.data)
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
                <section className={style.MainSection}>
                  <BurgerIngredients data={state} />
                </section>
                <section className={style.MainSection}>
                    <BurgerConstructorContext.Provider value={state}>
                        <BurgerConstructor data={state} />
                    </BurgerConstructorContext.Provider>
                </section>
            </main>
        </div>
      );
}

export default App;
