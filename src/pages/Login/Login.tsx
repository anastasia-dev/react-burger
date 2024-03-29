import React, {ChangeEvent, FormEvent} from "react";
import style from "./Login.module.css";
import styleMain from "../../pages/ForgotPassword/ForgotPassword.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate, useLocation} from "react-router-dom";
import {login} from "../../services/actions/thunks/usersAuth";
import {ILocation} from "../../interfaces/ILocation";
import { useAppDispatch } from "../../services/hooks";

function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location  = useLocation() as ILocation;

    const fromPage = location.state?.from?.pathname ?? '/';

    const redirect = (isRedirect: boolean) => {
        if (isRedirect) {
            navigate(fromPage);
        }
    };

    const [form, setValue] = React.useState({ email : '' , password : '' })
    const onChange = (e : ChangeEvent<HTMLInputElement>) => {
        setValue({ ...form, [e.target.name]: e.target.value })
    }

    const onLogin = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(login({ email: form.email, password: form.password }, redirect));
    }

    return (
        <section className={styleMain.formPageContainer}>
            <h1 className={styleMain.headBlock}>
                <p className="text text_type_main-medium">Вход</p>
            </h1>
            <main className={styleMain.mainBlock}>
                <form onSubmit={onLogin}>
                    <section className={style.mailInput}>
                        <Input
                            type={'email'}
                            placeholder={'E-mail'}
                            value={form.email}
                            onChange={onChange}
                            name={'email'}
                            size={'default'}
                        />
                    </section>
                    <section className={style.mailInput}>
                        <Input
                            type={'text'}
                            placeholder={'Пароль'}
                            value={form.password}
                            onChange={onChange}
                            icon={'ShowIcon'}
                            name={'password'}
                            size={'default'}
                        />
                    </section>
                    <section className={styleMain.bottomButton}>
                        <Button type="primary" size="large">Войти</Button>
                    </section>
                </form>
            </main>
            <footer>
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