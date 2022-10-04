import React from "react";
import {useDispatch} from "react-redux";
import style from "./Register.module.css";
import styleMain from "../../pages/ForgotPassword/ForgotPassword.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {registerNewUser} from "../../services/actions/newUser";



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
            <h1 className={styleMain.headBlock}>
                <p className="text text_type_main-medium">
                    Регистрация
                </p>
            </h1>
            <main className={styleMain.mainBlock}>
                <form onSubmit={newRegister}>
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
                    <section className={styleMain.bottomButton}>
                        <Button type="primary" size="large" >
                            Зарегистрироваться
                        </Button>
                    </section>
                </form>
            </main>
            <footer>
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