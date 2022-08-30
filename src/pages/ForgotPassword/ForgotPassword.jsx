import React from "react";
import {useDispatch} from "react-redux";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./ForgotPassword.module.css";
import {Link} from "react-router-dom";


function ForgotPassword() {
    const [email, setEmail] = React.useState('');
    const dispatch = useDispatch();
    function forgotPassword() {

    }
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
                        onChange={e => setEmail(e.target.value )}
                        value={email}
                        name={'name'}
                        size={'default'}
                    />
                </section>
            </main>
            <footer>
                <section className={style.bottomButton}>
                    <Button type="primary" size="large" onClick={fogotPassword}>
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