import {checkApiResponse} from "../../../utils/apiCheck";
import {
    SET_FORGOT_PASSWORD_FAILED,
    SET_FORGOT_PASSWORD_REQUEST,
    SET_FORGOT_PASSWORD_SUCCESS,
    SET_LOGIN_FAILED,
    SET_LOGIN_SUCCESS,
    SET_LOGOUT_REQUEST,
    SET_LOGOUT_SUCCESS,
    SET_TOKEN_FAILED,
    SET_TOKEN_REQUEST,
    SET_TOKEN_SUCCESS,
    SET_USER_FAILED,
    SET_USER_REQUEST, SET_USER_SUCCESS,
    SET_USER_UPDATE_FAILED,
    SET_USER_UPDATE_REQUEST,
    SET_USER_UPDATE_SUCCESS
} from "../userRegistration";
import {URL_LOGIN, URL_LOGOUT, URL_PWD_RESET, URL_PWD_RESET_DONE, URL_USER_DATA} from "../../../utils/constants";
import {deleteCookie, getCookie, getTokens} from "../../../utils/cookiesApi";
import {useNavigate} from "react-router-dom";
import {Action, Dispatch} from "redux";

function setForgotPassFailed() {
    return {
        type: SET_FORGOT_PASSWORD_FAILED,
    }
}

export const forgotPassword = (user: { email:string }, redirect: () => void) => {
    return async function (dispatch: Dispatch<Action>) {
        dispatch({
            type: SET_FORGOT_PASSWORD_REQUEST
        });
        await fetchAndCheckResponse(URL_PWD_RESET, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ email: user.email })
        })
            .then(res => {
                if (res && res.success) {
                    dispatch({
                        type: SET_FORGOT_PASSWORD_SUCCESS
                    });
                    redirect();
                }
            })
            .catch(e => {
                e ? alert(e) : alert("Не удалось получить данные");
                dispatch(setForgotPassFailed());
            })
    }

};

export const resetPassword = (user: { token: string, password: string }, redirect: () => void) => {
    return async function (dispatch: Dispatch<Action>) {
        dispatch({
            type: SET_FORGOT_PASSWORD_REQUEST
        });
        await fetchAndCheckResponse(URL_PWD_RESET_DONE, {
            body: JSON.stringify({ token: user.token, password: user.password }),
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res && res.success) {
                    dispatch({
                        type: SET_FORGOT_PASSWORD_SUCCESS
                    });
                    redirect();
                } else {
                    dispatch(setForgotPassFailed());
                }
            })
            .catch(e => {
                e ? alert(e) : alert("Не удалось получить данные");
                dispatch(setForgotPassFailed());
            })
    }

};

export const login = (user: {email: string, password: string}, redirect: (isRedirect: boolean) => void) => {
    return function (dispatch: Dispatch<Action>) {
        fetchAndCheckResponse(URL_LOGIN, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({email: user.email, password: user.password})
        }).then((res) => {
                getTokens(res);
                if (res && res.success) {
                    dispatch({
                        type: SET_LOGIN_SUCCESS,
                        user: {
                            name: res.user.name,
                            email: res.user.email
                        }
                    });
                    redirect(true);
                } else {
                    dispatch({
                        type: SET_LOGIN_FAILED,
                        user: {}
                    });
                }
            })
            .catch((e) => {
                e ? alert(e) : alert("Не удалось авторизоваться");
                dispatch({
                    type: SET_LOGIN_FAILED,
                    user: {}
                });
            });
    };
};

export const logout = (redirect: () => void) => {
    if (!localStorage.refreshToken) {
        redirect()
    }
    return function (dispatch: Dispatch<Action>) {
        dispatch({
            type: SET_LOGOUT_REQUEST
        });
        localStorage.removeItem('refreshToken');
        deleteCookie('token');
        fetchAndCheckResponse(URL_LOGOUT, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ token: localStorage.refreshToken })
        }).then((res) => {
                if (res && res.success) {
                    dispatch({
                        type: SET_LOGOUT_SUCCESS,
                    });
                    redirect();
                } else {
                    dispatch({
                        type: SET_LOGIN_FAILED
                    });
                }
            })
            .catch((e) => {
                e ? alert(e) : alert("Не удалось получить авторизоваться");
                dispatch({
                    type: SET_LOGIN_FAILED
                });
            });
    };
};


export const refreshAuthToken = () => {
    return async function (dispatch: Dispatch<Action>) {
        dispatch({
            type: SET_TOKEN_REQUEST,
            user: {}
        });
        return await fetchAndCheckResponse(URL_USER_DATA, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ token: localStorage.refreshToken })
        }).then((res) => {
                const navigate = useNavigate();
                const redirect = () => {
                    navigate('/login')
                };
                getTokens(res);
                if (res && res.success) {
                    dispatch({
                        type: SET_TOKEN_SUCCESS,
                        user: {}
                    });
                } else {
                    logout(redirect);
                    dispatch({
                        type: SET_TOKEN_FAILED,
                        user: {}
                    });
                }
                return res
            })
            .catch((e) => {
                if (e.message === 'Token is invalid') {
                    dispatch({
                        type: SET_TOKEN_FAILED,
                        user: {}
                    })
                }
            });
    };
};

export const getUser = () => {
    return function (dispatch: Dispatch<Action>) {
        dispatch({
            type: SET_USER_REQUEST,
            user: {}
        });
        fetchAndCheckResponse(URL_USER_DATA, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + getCookie('token')
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        }).then((res) => {
                    dispatch({
                        type: SET_USER_SUCCESS,
                        user: res.user
                    });
                }
            )
            .catch((e) => {
                e ? alert(e) : alert("Не удалось получить данные пользователя");
                dispatch({
                    type: SET_USER_FAILED,
                    user: {}
                });
            })
    }
}

export const updateUser = (user : {name: string, email: string}) => {
    return function (dispatch: Dispatch<any>) {
        dispatch({
            type: SET_USER_UPDATE_REQUEST,
            user: {}
        });
        fetchAndCheckResponse(URL_USER_DATA, {
            method: 'PATCH',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getCookie('token')}`
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ user : { name: user.name, email: user.email }})
        }).then((res) => {
                if (res && res.success) {
                    dispatch({
                        type: SET_USER_UPDATE_SUCCESS,
                        user: res.user
                    });
                } else {
                    dispatch({
                        type: SET_USER_UPDATE_FAILED,
                        user: {}
                    });
                }
            })
            .catch((e) => {
                if ((e.message === 'jwt expired') || (e.message === 'Token is invalid')) {
                    refreshAuthToken();
                    dispatch(updateUser({name: user.name, email: user.email}));
                } else dispatch({
                    type: SET_USER_UPDATE_FAILED,
                    user: {}
                })
            });
    };
};

export const fetchAndCheckResponse = (url: string, options: any) => {
    return fetch(url, options).then(checkApiResponse);
}

export const isAuthorized = () => {
    return getCookie('token') !== undefined || localStorage.refreshToken;
}
