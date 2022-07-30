import React from "react";
import style from './OrderDetails.module.css'
import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from "react-redux";


function OrderDetails () {
    const number = useSelector(state => state.orderNumber.orderNumber);

    return (number &&
        <div className={style.orderDetailInfo}>
            <section className={style.orderNum}>
                <p className="text text_type_digits-large">{number}</p>
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
    )
}

export default OrderDetails