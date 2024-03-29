import React, {ChangeEvent, EventHandler, FormEvent} from "react";
import {useEffect} from "react";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./ForgotPassword.module.css";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {forgotPassword} from "../../services/actions/thunks/usersAuth";
import {ILocation} from "../../interfaces/ILocation";
import { useAppDispatch, useAppSelector } from "../../services/hooks";


function ForgotPassword() {
    const [form, setValue] = React.useState({ email: '' });
    const isLogged = useAppSelector(store => store.user.isLoggedIn);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation() as ILocation;

    useEffect(() => {
        if (isLogged) {
            navigate('/');
        }
    }, [])


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({ ...form, [e.target.name]: e.target.value })
    }

    const forgotPass = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const redirect = () : void => {
            navigate('/reset-password', {state : {from : location}});
        };
        dispatch(forgotPassword({ email: form.email }, redirect));
    };

    return (
        <section className={style.formPageContainer}>
            <h1 className={style.headBlock}>
                <p className="text text_type_main-medium">Восстановление пароля</p>
            </h1>
            <main className={style.mainBlock}>
                <form onSubmit={forgotPass}>
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
                    <section className={style.bottomButton}>
                        <Button type="primary" size="large">
                            {'Восстановить'}
                        </Button>
                    </section>
                </form>
            </main>
            <footer>
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