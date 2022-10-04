import React from "react";
import {useDispatch, useSelector} from "react-redux";
import style from "./Login.module.css";
import styleMain from "../../pages/ForgotPassword/ForgotPassword.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate, useLocation} from "react-router-dom";
import {login} from "../../services/actions/usersAuth";

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