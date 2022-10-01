import {
    SET_REGISTER_REQUEST,
    SET_REGISTER_SUCCESS,
    SET_REGISTER_FAILED
} from "../services/actions/userRegistration";
import {checkApiResponse} from "./apiCheck";
import {getTokens} from "./cookiesApi";

import {URL_REGISTER} from "./constants";

export const registerNewUser = (regData, redirect) => {

return async function (dispatch) {
    dispatch({
        type: SET_REGISTER_REQUEST
    });
    await fetch(URL_REGISTER, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(regData)
    }).then(checkApiResponse)
        .then((res) => {
           getTokens(res);
            if (res && res.success) {
                dispatch({
                    type: SET_REGISTER_SUCCESS,
                    user: res.user
                });
                redirect();
            } else {
                dispatch({
                    type: SET_REGISTER_FAILED,
                    user: {}
                });
            }
        })
        .catch((e) => {
                dispatch({
                    type: SET_REGISTER_FAILED,
                    user: {}
                })
            }
        );
};

}