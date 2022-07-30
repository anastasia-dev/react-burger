import {SHOW_ORDER_NUMBER, SHOW_ORDER_NUMBER_FAILED} from "../services/actions/orderNumber";
import {URL_ORDERS} from "./constants";
import {checkApiResponse} from "./apiCheck";


const requestNumber = URL_ORDERS;

export function getOrderNumber(post) {
    return function (dispatch) {
        fetch(requestNumber, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(post)
        }).then(checkApiResponse)
            .then(res => {
                    dispatch({
                        type: SHOW_ORDER_NUMBER,
                        data: res.order.number
                    })
            }).catch((e) => {
                alert(e);
                dispatch({
                    type: SHOW_ORDER_NUMBER_FAILED,
                    data: `Произошла ошибка ${e}`
                })
        })
    }
}
