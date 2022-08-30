import {
    SET_REGISTRATION_REQUEST,
    SET_REGISTRATION_SUCCESS,
    SET_REGISTRATION_ERROR
} from "../services/actions/userRegistration";
import {checkApiResponse} from "./apiCheck";
import {getCookie, setCookie,deleteCookie} from "./cookiesApi";

import {URL_REGISTER} from "./constants";

const userRequest = async (data, path) => {
    return await fetch(URL_REGISTER, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
}

export function registerNewUser(regData) {
    return async function (dispatch) {
        dispatch({
            type: SET_REGISTRATION_REQUEST
        });
        await userRequest(regData, 'auth/register')
            .then(checkApiResponse)
            .then(res => {
                makeAuthToken(res);
                localStorage.setItem('refreshToken',res.refreshToken);
                dispatch({
                    type: SET_REGISTRATION_SUCCESS,
                    data: res.user
                });
            })
            .catch( e => {
                e ? alert(e) : alert("Произошла ошибка");
                dispatch({
                    type: SET_REGISTRATION_ERROR
                })
            } )
    }
}