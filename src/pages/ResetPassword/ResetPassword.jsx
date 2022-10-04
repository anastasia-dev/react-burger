import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import style from "./ResetPassword.module.css";
import styleMain from "../../pages/ForgotPassword/ForgotPassword.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {resetPassword} from "../../services/actions/usersAuth";

function ResetPassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [form, setValue] = React.useState({ token: '', password: '' });
    const onChange = (e) => {
        setValue({ ...form, [e.target.name]: e.target.value })
    }
    const fromPage = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (fromPage !== '/forgot-password') {
            redirect();
        }
    }, []);

    const redirect = () => {
        navigate('/')
    };

    const onReset = (e) => {
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
