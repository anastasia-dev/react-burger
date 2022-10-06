import {
    SHOW_ORDER_NUMBER_SUCCESS,
    SHOW_ORDER_NUMBER_ERROR,
    SHOW_ORDER_NUMBER_REQUEST
} from "./orderNumber";
import {URL_ORDERS} from "../../utils/constants";
import {checkApiResponse} from "../../utils/apiCheck";
import {Dispatch} from "react";
import {AnyAction} from "redux";


const requestNumber = URL_ORDERS;

export const getOrderNumber = (post : any) => {
    return function (dispatch : Dispatch<AnyAction>) {
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
