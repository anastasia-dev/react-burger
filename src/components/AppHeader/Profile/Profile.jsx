import React from "react";
import style from "./Profile.module.css";
import {ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function Profile() {
    return (
        <section className={style.profile}>
            <ProfileIcon type="secondary"/>
            <p className="text text_type_main-default">Личный кабинет</p>
        </section>
    );
}

export default Profile;