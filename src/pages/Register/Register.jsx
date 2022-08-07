import React from "react";
import style from "./Register.module.css";
import styleMain from "../../pages/ForgotPassword/ForgotPassword.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";


function Register() {
    return (
        <section className={styleMain.formPageContainer}>
            <header className={styleMain.headBlock}>
                <p className="text text_type_main-medium">
                    Регистрация
                </p>
            </header>
            <main className={styleMain.mainBlock}>
                <section className={style.mailInput}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                       // onChange={e => setName(e.target.value)}
                        value={'name'}
                        name={'name'}
                        error={false}
                       //ref={nameRef}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </section>
                <section className={style.mailInput}>
                    <Input
                        type={'email'}
                        placeholder={'E-mail'}
                       // onChange={e => setEmail(e.target.value)}
                        value={'email'}
                        name={'name'}
                        error={false}
                       // ref={emailRef}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </section>
                <section className={style.mailInput}>
                    <Input
                        type={ 'text' }
                        placeholder={'Пароль'}
                      //  onChange={e => setPwd(e.target.value)}
                        icon={'HideIcon' }
                        value={'pwd'}
                        name={'name'}
                        error={false}
                       // ref={pwdRef}
                      //  onIconClick={onPwdClick}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </section>
            </main>
            <footer>
                <section className={styleMain.bottomButton}>
                    <Button type="primary" size="large" onClick={[]}>
                        Зарегистрироваться
                    </Button>
                </section>
                <section className={styleMain.bottomText}>
                    <p className="text text_type_main-small">
                        Уже зарегистрированы? <Link to="/login">Войти</Link>
                    </p>
                </section>
            </footer>
        </section>
    )
}

export default Register;