import React from "react";
import {useDispatch} from "react-redux";
import style from "./Register.module.css";
import styleMain from "../../pages/ForgotPassword/ForgotPassword.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {registerNewUser} from "../../utils/newUser";



function Register() {
    const dispatch = useDispatch();

    const [form, setValue] =React.useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();
    const onChange = (e) => {
        setValue({ ...form, [e.target.name]: e.target.value });
    }
    const redirect = () => {

        navigate('/')
    };
    function newRegister(e) {
        e.preventDefault();
        dispatch(registerNewUser(form, redirect));
    }
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
                        value={form.name}
                        name={'name'}
                        size={'default'}
                        onChange={onChange}
                    />
                </section>
                <section className={style.mailInput}>
                    <Input
                        type={'email'}
                        placeholder={'E-mail'}
                        value={form.email}
                        name={'email'}
                        size={'default'}
                        onChange={onChange}
                    />
                </section>
                <section className={style.mailInput}>
                    <Input
                        type={'password'}
                        placeholder={'Пароль'}
                        icon={'HideIcon'}
                        value={form.password}
                        name={'password'}
                        error={false}
                        size={'default'}
                        onChange={onChange}
                    />
                </section>
            </main>
            <footer>
                <section className={styleMain.bottomButton}>
                    <form onSubmit={newRegister}>
                    <Button type="primary" size="large" >
                        Зарегистрироваться
                    </Button>
                    </form>
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