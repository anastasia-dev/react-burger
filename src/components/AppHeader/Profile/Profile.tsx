import React from "react";
import style from "./Profile.module.css";
import {ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

 export type ProfileProps = {
    location:  string;
}

function Profile({location} : ProfileProps) {

    return (
        <section className={style.profile}>
            <Link className={style.activeLink} to="/profile">
                <ProfileIcon type={location.includes("/profile") ? "primary" : "secondary"} />
                <p className={`text text_type_main-default ${location.includes("/profile") ? style.activeLink : ""}`}>Личный кабинет</p>
            </Link>
        </section>
    );
}

export default Profile;