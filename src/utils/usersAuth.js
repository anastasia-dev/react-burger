import {checkApiResponse} from "./apiCheck";
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
} from "../services/actions/userRegistration";
import {URL_LOGIN, URL_LOGOUT, URL_PWD_RESET, URL_PWD_RESET_DONE, URL_USER_DATA} from "./constants";
import {deleteCookie, getCookie, getTokens} from "./cookiesApi";
import {useNavigate} from "react-router-dom";

export const forgotPassword = ({ email }, redirect) => {
    return async function (dispatch) {
        dispatch({
            type: SET_FORGOT_PASSWORD_REQUEST
        });
        await fetch(URL_PWD_RESET, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ email: email })
        })
            .then(checkApiResponse)
            .then(res => {
                if (res && res.success) {
                    dispatch({
                        type: SET_FORGOT_PASSWORD_SUCCESS
                    });
                    redirect();
                }
            })
            .catch(e => {
                dispatch({
                    type: SET_FORGOT_PASSWORD_FAILED
                })
            })
    }

};

export const resetPassword = ({ token, password }, redirect) => {
    return async function (dispatch) {
        dispatch({
            type: SET_FORGOT_PASSWORD_REQUEST
        });
        await fetch(URL_PWD_RESET_DONE, {
            body: JSON.stringify({ token, password }),
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(checkApiResponse)
            .then(res => {
                if (res && res.success) {
                    dispatch({
                        type: SET_FORGOT_PASSWORD_SUCCESS
                    });
                    redirect();
                } else {
                    dispatch({
                        type: SET_FORGOT_PASSWORD_FAILED
                    });
                }
            })
            .catch(e => {
                dispatch({
                    type: SET_FORGOT_PASSWORD_FAILED
                })
            })
    }

};

export const login = ({email, password}, redirect) => {
    return function (dispatch) {
        fetch(URL_LOGIN, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({email, password})
        }).then(checkApiResponse)
            .then((res) => {
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
                dispatch({
                    type: SET_LOGIN_FAILED,
                    user: {}
                });
            });
    };
};

export const logout = (redirect) => {
    if (!localStorage.refreshToken) {
        redirect()
    }
    return function (dispatch) {
        dispatch({
            type: SET_LOGOUT_REQUEST
        });
        fetch(URL_LOGOUT, {
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
        }).then(checkApiResponse)
            .then((res) => {
                localStorage.removeItem('refreshToken');
                deleteCookie('token');
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
            .catch(() =>
                dispatch({
                    type: SET_LOGIN_FAILED
                })
            );
    };
};


export const refreshAuthToken = () => {
    return async function (dispatch) {
        dispatch({
            type: SET_TOKEN_REQUEST,
            user: {}
        });
        return await fetch(URL_USER_DATA, {
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
        }).then(checkApiResponse)
            .then((res) => {
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
    return function (dispatch) {
        dispatch({
            type: SET_USER_REQUEST,
            user: {}
        });
        fetch(URL_USER_DATA, {
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
        })
            .then(checkApiResponse)
            .then((res) => {
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

export const updateUser = ({name, email}) => {
    return function (dispatch) {
        dispatch({
            type: SET_USER_UPDATE_REQUEST,
            user: {}
        });
        fetch(URL_USER_DATA, {
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
            body: JSON.stringify({ user : { name: name, email: email }})
        })
            .then(checkApiResponse)
            .then((res) => {
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
                    dispatch(updateUser({name,email}));
                } else dispatch({
                    type: SET_USER_UPDATE_FAILED,
                    user: {}
                })
            });
    };
};

export const isAuthorized = () => {
    return getCookie('token') !== undefined || localStorage.refreshToken;
}
