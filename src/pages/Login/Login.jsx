import React from "react";
import style from "./Login.module.css";
import styleMain from "../../pages/ForgotPassword/ForgotPassword.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

function Login() {
    return (
        <section className={styleMain.formPageContainer}>
            <header className={styleMain.headBlock}>
                <p className="text text_type_main-medium">Вход</p>
            </header>
            <main className={styleMain.mainBlock}>
                <section className={style.mailInput}>
                    <Input
                        type={'email'}
                        placeholder={'E-mail'}
                        onChange={[]}
                        value={'email'}
                        name={'name'}
                        error={false}
                        //ref={'emailRef'}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </section>
                <section className={style.mailInput}>
                    <Input
                        type={ 'text' }
                        placeholder={'Пароль'}
                        onChange={[]}
                        icon={ 'ShowIcon' }
                        value={'pwd'}
                        name={'name'}
                        error={false}
                        //ref={'pwdRef'}
                        onIconClick={[]}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </section>
            </main>
            <footer>
                <section className={styleMain.bottomButton}>
                    <Button type="primary" size="large" onClick={[]}>Войти</Button>
                </section>
                <section className={styleMain.bottomText}>
                    <p className="text text_type_main-small">
                        Вы новый пользователь? <Link to="/register">Зарегистрироваться</Link>
                    </p>
                    <p className="text text_type_main-small">
                        Забыли пароль? <Link to="/forgot-password">Восстановить пароль</Link>
                    </p>
                </section>
            </footer>
        </section>
    )
}

export default Login;