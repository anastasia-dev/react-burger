import React, {ChangeEvent, FormEvent, useEffect} from "react";
import style from "./ResetPassword.module.css";
import styleMain from "../../pages/ForgotPassword/ForgotPassword.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {resetPassword} from "../../services/actions/thunks/usersAuth";
import {ILocation} from "../../interfaces/ILocation";
import { useAppDispatch } from "../../services/hooks";

function ResetPassword() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation() as ILocation;
    const [form, setValue] = React.useState({ token: '', password: '' });
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({ ...form, [e.target.name]: e.target.value })
    }
    const fromPage = location.state?.from?.pathname ?? '/';

    useEffect(() => {
        if (fromPage !== '/forgot-password') {
            redirect();
        }
    }, []);

    const redirect = () => {
        navigate('/')
    };

    const onReset = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(resetPassword(form, redirect));
    };

    return (
        <section className={styleMain.formPageContainer}>
            <h1 className={styleMain.headBlock}>
                <p className="text text_type_main-medium">Восстановление пароля</p>
            </h1>
            <main className={styleMain.mainBlock}>
                <form onSubmit={onReset}>
                    <section className={style.mailInput}>
                        <Input
                            type={'text'}
                            placeholder={'Новый пароль'}
                            onChange={onChange}
                            value={form.password}
                            name={'password'}
                            size={'default'}
                        />
                    </section>
                    <section className={style.mailInput}>
                        <Input
                            type={'text'}
                            placeholder={'Введите код из письма'}
                            onChange={onChange}
                            value={form.token}
                            name={'token'}
                            size={'default'}
                        />
                    </section>
                    <section className={styleMain.bottomButton}>
                            <Button type="primary" size="large">
                                {'Сохранить'}
                            </Button>
                    </section>
                </form>
            </main>
            <footer>
                <section className={styleMain.bottomText}>
                    <p className="text text_type_main-small">Вспомнили пароль? <Link to="/login">Войти</Link></p>
                </section>
            </footer>
        </section>
    )
}

export default ResetPassword;
