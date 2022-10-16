import {
    SHOW_ORDER_NUMBER_SUCCESS,
    SHOW_ORDER_NUMBER_ERROR,
    SHOW_ORDER_NUMBER_REQUEST
} from "../orderNumber";
import {URL_ORDERS} from "../../../utils/constants";
import {checkApiResponse} from "../../../utils/apiCheck";
import {AppDispatch, AppThunk} from "../../types";
import { getCookie } from "../../../utils/cookiesApi";


const requestNumber = URL_ORDERS;

export const getOrderNumber = (order : { ingredients: Array<string> }) : AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: SHOW_ORDER_NUMBER_REQUEST,
        });
        fetch(requestNumber, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: 'Bearer ' + getCookie('token')
            },
            body: JSON.stringify(order)
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
