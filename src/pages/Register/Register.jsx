import React from "react";
import {useDispatch} from "react-redux";
import style from "./Register.module.css";
import styleMain from "../../pages/ForgotPassword/ForgotPassword.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";


function Register() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const dispatch = useDispatch();

    function newRegister() {
        let regData = {
            email : email,
            password: password,
            name: name
        };
        dispatch(regData);

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
                        value={name}
                        name={'name'}
                        //ref={nameRef}
                        size={'default'}
                        onChange={e => setName(e.target.value)}
                    />
                </section>
                <section className={style.mailInput}>
                    <Input
                        type={'email'}
                        placeholder={'E-mail'}
                        value={email}
                        name={'email'}
                       // ref={emailRef}
                        size={'default'}
                        onChange={e => setEmail(e.target.value)}
                    />
                </section>
                <section className={style.mailInput}>
                    <Input
                        type={'password'}
                        placeholder={'Пароль'}
                        icon={'HideIcon'}
                        value={'pwd'}
                        name={'name'}
                        error={false}
                       // ref={pwdRef}
                        //onIconClick={setPassword}
                        size={'default'}
                        onChange={e => setPassword(e.target.value)}
                    />
                </section>
            </main>
            <footer>
                <section className={styleMain.bottomButton}>
                    <Button type="primary" size="large" onClick={newRegister}>
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