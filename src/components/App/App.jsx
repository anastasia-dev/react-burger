import React from 'react';
import AppHeader from "../../components/AppHeader/AppHeader";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import style from "./App.module.css";

function App () {
  return (
    <div className={style.App}>
      <AppHeader />
        <main className={style.MainContainer}>
            <section className={style.MainSection}>
              <BurgerIngredients />
            </section>
            <section className={style.MainSection}>
              <BurgerConstructor />
            </section>
        </main>
    </div>
  );
}

export default App;
