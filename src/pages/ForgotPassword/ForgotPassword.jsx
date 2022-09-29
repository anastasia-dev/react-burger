import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./ForgotPassword.module.css";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {forgotPassword} from "../../utils/usersAuth";


function ForgotPassword() {
    const [form, setValue] = React.useState({ email: '' });
    const isLogged = useSelector((store) => store.user.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (isLogged) {
            navigate('/');
        }
    }, [])


    const onChange = (e) => {
        setValue({ ...form, [e.target.name]: e.target.value })
    }

    const forgotPass = (e) => {
        e.preventDefault();
        const redirect = () => {
            navigate('/reset-password', {state : {from : location}});
        };
        dispatch(forgotPassword({ email: form.email }, redirect));
    };

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
                        onChange={onChange}
                        value={form.email}
                        name={'email'}
                        size={'default'}
                    />
                </section>
            </main>
            <footer>
                <section className={style.bottomButton}>
                    <form onSubmit={forgotPass}>
                        <Button type="primary" size="large">
                            {'Восстановить'}
                        </Button>
                    </form>
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