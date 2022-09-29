import React from "react";
import {useDispatch, useSelector} from "react-redux";
import style from "./Login.module.css";
import styleMain from "../../pages/ForgotPassword/ForgotPassword.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate, useLocation} from "react-router-dom";
import {login} from "../../utils/usersAuth";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const fromPage = location.state?.from?.pathname || '/';
    const {email, password} = useSelector((store) => store.user);

    const redirect = (isRedirect) => {
        if(isRedirect) {
            navigate(fromPage);
        }
    };

    const [form, setValue] = React.useState({ email: email ?? '' , password : password ?? '' })
    const onChange = (e) => {
        setValue({ ...form, [e.target.name]: e.target.value })
    }

    const onLogin = (e) => {
        e.preventDefault();
        dispatch(login({ email: form.email, password: form.password }, redirect));
    }

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
                        onChange={onChange}
                        name={'email'}
                        size={'default'}
                    />
                </section>
                <section className={style.mailInput}>
                    <Input
                        type={'text'}
                        placeholder={'Пароль'}
                        onChange={onChange}
                        icon={'ShowIcon'}
                        name={'password'}
                        size={'default'}
                    />
                </section>
            </main>
            <footer>
                <section className={styleMain.bottomButton}>
                    <form onSubmit={onLogin}>
                        <Button type="primary" size="large">Войти</Button>
                    </form>
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