import React from 'react';
import AppHeader from "../../components/AppHeader/AppHeader";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import style from "./App.module.css";

const getDataInfo = 'https://norma.nomoreparties.space/api/ingredients';

function App () {
    const [state, setState] = React.useState([]);

    React.useEffect( () => {
        fetch(getDataInfo)
            .then(r => r.json())
            .then(res => {
                if (res.success) {
                    setState(res.data)
                } else {
                    return Promise.reject(res.status);
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
                  <BurgerConstructor data={state} />
                </section>
            </main>
        </div>
      );
}

export default App;
