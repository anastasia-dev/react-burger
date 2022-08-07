import React from "react";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./ForgotPassword.module.css";
import {Link} from "react-router-dom";


function ForgotPassword() {
    return (
        <section className={style.formPageContainer}>
            <header className={style.headBlock}>
                <p className="text text_type_main-medium">Восстановление пароля</p>
            </header>
            <main className={style.mainBlock}>
                <section className={style.mailInput}>
                    <Input
                        type={'email'}
                        placeholder={'E-mail'}
                        onChange={[]}
                        value={'test'}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </section>
            </main>
            <footer>
                <section className={style.bottomButton}>
                    <Button type="primary" size="large" onClick={[]}>
                        {'Восстановить'}
                    </Button>
                </section>
                <section className={style.bottomText}>
                    <p className="text text_type_main-small">
                        Вспомнили пароль? <Link to={"/login"}>Войти</Link>
                    </p>
                </section>
            </footer>
        </section>
    )
}

export default ForgotPassword;