import {
    SHOW_ORDER_NUMBER_SUCCESS,
    SHOW_ORDER_NUMBER_ERROR,
    SHOW_ORDER_NUMBER_REQUEST
} from "../services/actions/orderNumber";
import {URL_ORDERS} from "./constants";
import {checkApiResponse} from "./apiCheck";


const requestNumber = URL_ORDERS;

export function getOrderNumber(post) {
    return function (dispatch) {
        dispatch({
            type: SHOW_ORDER_NUMBER_REQUEST,
        });
        fetch(requestNumber, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(post)
        }).then(checkApiResponse)
            .then(res => {
                    dispatch({
                        type: SHOW_ORDER_NUMBER_SUCCESS,
                        data: res.order.number
                    });
            }).catch((e) => {
                alert(e);
                dispatch({
                    type: SHOW_ORDER_NUMBER_ERROR,
                    data: `Произошла ошибка ${e}`
                });
        })
    }
}
