import React, {useEffect} from "react";
import style from "./Profile.module.css";
import {NavLink, useNavigate} from "react-router-dom";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {getUser, logout, updateUser} from "../../utils/usersAuth";


function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const redirect = () => {navigate('/login')};
    const user = useSelector((store) => store.user);
    const [form, setValue] = React.useState({ email: user.email ?? '' , password : user.password ?? '', name: user.name ?? '' })

    const onChange = (e) => {
        setValue({ ...form, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        setValue({ ...form, name : user.name, email : user.email });
    }, [user]);

    useEffect( () => {
            dispatch(getUser());
        }, []
    );

    const onLogout = (e) => {
        e.preventDefault();
        dispatch(logout(redirect));
    }

    const onCancelUpdate = (e) => {
        e.preventDefault();
        setValue({ email: user.email, name: user.name, password: '' });
    }

    const onUpdateUser = (e) => {
        e.preventDefault();
        dispatch(updateUser({email: form.email, name:form.name}));
    }

    return (
        <div className={style.mainBlock}>
            <div className={style.menu}>
                    <div className={style.menuItem}>
                        <NavLink to='/profile' className={style.menuItemLink}>
                            <p className="text text_type_main-medium">
                                Профиль
                            </p>
                        </NavLink>
                    </div>
                    <div className={style.menuItem}>
                        <NavLink to={'/profile/orders'} className={style.menuItemLink}>
                            <p className="text text_type_main-medium">
                                История заказов
                            </p>
                    </NavLink>
                    </div>
                    <div className={style.menuItem} onClick={onLogout}>
                        <span className={style.menuItemLink}>
                             <p className="text text_type_main-medium">
                                    Выход
                             </p>
                        </span>
                    </div>
                <div className={style.info}>
                    <p className="text text_type_main-small">
                        В этом разделе вы можете изменить свои персональные данные
                    </p>
                </div>
            </div>
            <div className={style.data}>
                <div className={style.dataItem}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={onChange}
                        icon={'EditIcon'}
                        value={form.name}
                        name={'name'}
                        size={'default'}
                    />
                </div>
                <div className={style.dataItem}>
                    <Input
                        type={'email'}
                        placeholder={'E-mail'}
                        onChange={onChange}
                        icon={'EditIcon'}
                        value={form.email}
                        name={'email'}
                        size={'default'}
                    />
                </div>
                <div className={style.dataItem}>
                    <Input
                        type={'password'}
                        placeholder={'Пароль'}
                        onChange={onChange}
                        icon={'EditIcon'}
                        value={form.password}
                        name={'password'}
                        size={'default'}
                    />
                </div>
                <div className={style.button}>
                    <form onSubmit={onUpdateUser}>
                        <Button type="primary" size="large" >
                            Сохранить
                        </Button>
                    </form>
                </div>
                    <div className={style.button}>
                        <form onSubmit={onCancelUpdate}>
                            <Button type="primary" size="large" >
                                Отменить
                            </Button>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default Profile;