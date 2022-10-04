import React from "react";
import style from "../../OrderHistory/OrderHistory.module.css";
import {Link} from "react-router-dom";


function ProfileOrderHistory() {
    return (
        <section className={style.mainBlock}>
            <h1>
                <p className="text text_type_main-large">
                    Контент уже в пути, нужно немного потерпеть...
                </p>
            </h1>
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

export default ProfileOrderHistory;