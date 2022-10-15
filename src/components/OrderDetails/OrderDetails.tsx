import React, {ReactElement} from "react";
import style from './OrderDetails.module.css'
import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppSelector } from "../../services/hooks";

function OrderDetails () {
    const orderState = useAppSelector(state => state.orderNumber);

    let content: ReactElement = (<></>);
    if(orderState.orderNumberLoading) {
        content = (
            <div className={style.orderDetailInfo}>
                <section className={style.orderStatusNotice}>
                    <p className="text text_type_main-large mb-20">Заказ отправлен, минуточку...</p>
                </section>
            </div>
            ); 
    }
    if (orderState.orderNumberFailed) {
        content = (
            <div className={style.orderDetailInfo}>
                <section className={style.orderStatusNotice}>
                    <p className="text text_type_main-large mb-20">Ошибка получения заказа.</p>
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