import React from "react";
import style from './OrderDetails.module.css'
import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from "react-redux";

function OrderDetails () {
    const orderState = useSelector(state => state.orderNumber);

    let content;
    if (orderState.orderNumberFailed) {
        content = (
            <div className={style.orderDetailInfo}>
                <section className={style.orderStatusNotice}>
                    <p className="text text_type_main-default">Ошибка получения заказа.</p>
                </section>
            </div>
            );
    }
    if (orderState.orderNumberSuccess)
        content = (orderState &&
            <div className={style.orderDetailInfo}>
                <section className={style.orderNum}>
                    <p className="text text_type_digits-large">{orderState.orderNumber}</p>
                </section>
                <section className={style.orderId}>
                    <p className="text text_type_main-default">идентификатор заказа</p>
                </section>
                <section className={style.orderReadyMark}>
                    <CheckMarkIcon type="primary"/>
                </section>
                <section className={style.orderStatusNotice}>
                    <p className="text text_type_main-default">Ваш заказ начали готовить</p>
                </section>
                <section className={style.orderReadyInfo}>
                    <p className="text text_type_main-small">Дождитесь готовности на орбитальной станции</p>
                </section>
            </div>
        );
    return content;
}

export default OrderDetails