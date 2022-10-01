import React from "react";
import style from "./NotFound.module.css"
import {Link} from "react-router-dom";


function NotFound() {
    return (
        <section className={style.notFound}>
            <h1>
                <p className="text text_type_main-large">
                    Страница не найдена :(
                </p>
            </h1>
            <section>
                <p className="text text_type_main-medium">
                    Никакой паники, можно перейти на:
                </p>
                <p className="text text_type_main-default">
                    <Link to="/">Главную страницу</Link>
                </p>
                <p className="text text_type_main-default">
                    <Link to="/login">Авторизацию</Link>
                </p>
            </section>
        </section>
    )
}

export default NotFound