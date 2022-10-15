import React, { useEffect } from "react";
import style from "../Profile.module.css";
import feedStyle from "../../../components/OrderFeed/OrderFeed.module.css"
import { NavLink, useNavigate} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../services/hooks";
import { logout } from "../../../services/actions/thunks/usersAuth";
import OrderFeedList from "../../../components/OrderFeed/OrderFeedList";
//import { closeUserOrderFeedConnection, startUserOrderFeedConnection } from "../../../services/actions/thunks/orderFeed";
import { USER_ORDER_FEED_CONNECTION_CLOSED, USER_ORDER_FEED_CONNECTION_START } from "../../../services/actions/userOrderFeed";


function ProfileOrderHistory() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const redirect = () => {navigate('/login')};
    const { ordersFeed }  = useAppSelector(store => store.userOrderFeed);

    const onLogout = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        dispatch(logout(redirect));
    }
    useEffect(() => {
        dispatch({
            type: USER_ORDER_FEED_CONNECTION_START
        })
        return () => { 
            dispatch({
                type: USER_ORDER_FEED_CONNECTION_CLOSED
            })
        }
    }, []);
    return (
        <section className={style.mainBlock}>
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
            </div>
            <div className={feedStyle.orderFeedProfile}>
                <OrderFeedList orders={ordersFeed?.orders} showStatus={true} modalUrl="/profile/orders/" />
            </div>
        </section>
    );
}

export default ProfileOrderHistory;