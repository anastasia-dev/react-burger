import React from "react";
import style from "./Profile.module.css";
import {NavLink} from "react-router-dom";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {URL_PROFILE, MENU_LINKS} from "../../utils/constants";


function Profile() {
    return (
        <div className={style.mainBlock}>
            <div className={style.menu}>
                {MENU_LINKS.map((elem,index) => (
                    <div className={style.menuItem} key={index}>
                        <NavLink to={elem.link} className={style.menuItemLink} onClick={[] } activeClassName={style.menuItemLinkActive} exact={true}>
                            <p className="text text_type_main-medium">
                                {elem.name}
                            </p>
                        </NavLink>
                    </div>
                ))}
                <div className={style.info}>
                    <p className="text text_type_main-small">
                        В этом разделе вы можете изменить свои персональные данные
                    </p>
                </div>
            </div>
            <div className={style.data}>
                <div className={style.dataItem}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={[]}
                        icon={'EditIcon'}
                        value={'ttt'}
                        name={'name'}
                        error={false}
                        //ref={nameRef}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={style.dataItem}>
                    <Input
                        type={'email'}
                        placeholder={'E-mail'}
                        onChange={[]}
                        icon={'EditIcon'}
                        value={'hhh'}
                        name={'name'}
                        error={false}
                       // ref={emailRef}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={style.dataItem}>
                    <Input
                        type={'password'}
                        placeholder={'Пароль'}
                        //onChange={[]}
                        icon={'EditIcon'}
                        value={'eee'}
                        name={'name'}
                        error={false}
                        //ref={pwdRef}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={style.button}>
                    <Button type="primary" size="large" onClick={[]}>
                        Сохранить
                    </Button>
                </div>
                    <div className={style.button}>
                        <Button type="primary" size="large" onClick={[]}>
                            Отменить
                        </Button>
                    </div>
            </div>
        </div>
    )
}

export default Profile;