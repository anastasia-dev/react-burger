import React from "react";
import style from "./ResetPassword.module.css";
import styleMain from "../../pages/ForgotPassword/ForgotPassword.module.css";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

function ResetPassword() {
    return (
        <section className={styleMain.formPageContainer}>
            <header className={styleMain.headBlock}>
                <p className="text text_type_main-medium">Восстановление пароля</p>
            </header>
            <main className={styleMain.mainBlock}>
                <section className={style.mailInput}>
                    <Input
                        type={ 'text' }
                        placeholder={'Пароль'}
                      //  onChange={e => setPwd(e.target.value)}
                        icon={ 'HideIcon' }
                        value={'pwd'}
                        name={'name'}
                        error={false}
                        //ref={pwdRef}
                       // onIconClick={onPwdClick}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </section>
                <section className={style.mailInput}>
                    <Input
                        type={'text'}
                        placeholder={'Введите код из письма'}
                        //onChange={e => setCode(e.target.value)}
                        value={'code'}
                        name={'name'}
                        error={false}
                       // ref={codeRef}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </section>
            </main>
            <footer>
                <section className={styleMain.bottomButton}>
                    <Button type="primary" size="large" onClick={{/*!loading ? () => reset(pwd, code) : () => {}*/}}>
                        {'Восстановить'}
                    </Button>
                </section>
                <section className={styleMain.bottomText}>
                    <p className="text text_type_main-small">Вспомнили пароль? <Link to="/login">Войти</Link></p>
                </section>
            </footer>
        </section>
    )
}

export default ResetPassword;
