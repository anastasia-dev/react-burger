import React from "react";
import style from "./OrderHistory.module.css";
import {Link} from "react-router-dom";


function OrderHistory() {
    return (
        <section className={style.mainBlock}>
            <header>
                <p className="text text_type_main-large">
                    Контент уже в пути, нужно немного потерпеть...
                </p>
            </header>
            <section>
                <p className="text text_type_main-medium">
                    Советуем вернуться на:
                </p>
                <p className="text text_type_main-default">
                    <Link to="/">Главную страницу</Link>
                </p>
            </section>
        </section>
    );
}

export default OrderHistory;