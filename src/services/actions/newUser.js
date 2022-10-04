import {
    SET_REGISTER_REQUEST,
    SET_REGISTER_SUCCESS,
    SET_REGISTER_FAILED
} from "./userRegistration";
import {getTokens} from "../../utils/cookiesApi";

import {URL_REGISTER} from "../../utils/constants";
import {fetchAndCheckResponse} from "./usersAuth";

export const registerNewUser = (regData, redirect) => {

return async function (dispatch) {
    dispatch({
        type: SET_REGISTER_REQUEST
    });
    await fetchAndCheckResponse(URL_REGISTER, {
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
    }).then((res) => {
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
        .catch(() => {
                dispatch({
                    type: SET_REGISTER_FAILED,
                    user: {}
                })
            }
        );
};

}