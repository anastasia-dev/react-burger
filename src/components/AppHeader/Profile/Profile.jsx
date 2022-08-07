import React from "react";
import style from "./Profile.module.css";
import {ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

function Profile(path) {
    return (
        <section className={style.profile}>
            <Link className={path.path === '/forgot-password' ? style.entry + ' ' + style.active : style.entry} to="/forgot-password">
                <ProfileIcon type={path.path ==='/forgot-password' ? "primary" : "secondary"} />
                <p className="text text_type_main-default">Личный кабинет</p>
            </Link>
        </section>
    );
}

export default Profile;