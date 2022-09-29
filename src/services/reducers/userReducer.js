import {
    SET_FORGOT_PASSWORD_FAILED,
    SET_FORGOT_PASSWORD_REQUEST,
    SET_FORGOT_PASSWORD_SUCCESS,
    SET_LOGIN_FAILED,
    SET_LOGIN_REQUEST,
    SET_LOGIN_SUCCESS,
    SET_LOGOUT_FAILED,
    SET_LOGOUT_REQUEST,
    SET_LOGOUT_SUCCESS,
    SET_REGISTER_FAILED,
    SET_REGISTER_REQUEST,
    SET_REGISTER_SUCCESS,
    SET_RESET_PASSWORD_FAILED,
    SET_RESET_PASSWORD_REQUEST,
    SET_RESET_PASSWORD_SUCCESS,
    SET_TOKEN_FAILED,
    SET_TOKEN_REQUEST,
    SET_TOKEN_SUCCESS,
    SET_USER_FAILED,
    SET_USER_SUCCESS,
    SET_USER_REQUEST,
    SET_USER_UPDATE_FAILED,
    SET_USER_UPDATE_REQUEST,
    SET_USER_UPDATE_SUCCESS
} from "../actions/userRegistration";

const userInitialState = {
    name: '',
    email: '',
    isLoggedIn : false,

    loginRequest: false,
    loginFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    forgotRequest: false,
    forgotFailed: false,

    resetRequest: false,
    resetFailed: false,

    authRequest: false,
    authFailed: false,

    tokenRequest: false,
    tokenFailed: false,
}

export function  userReducer (state = userInitialState, action) {
    switch (action.type) {
        case SET_FORGOT_PASSWORD_REQUEST: {
            return { ...state, forgotRequest: true };
        }
        case SET_FORGOT_PASSWORD_SUCCESS: {
            return { ...state, forgotFailed: false, forgotRequest: false };
        }
        case SET_FORGOT_PASSWORD_FAILED: {
            return { ...state, forgotFailed: true };
        }
        case SET_RESET_PASSWORD_REQUEST: {
            return { ...state, resetRequest: true };
        }
        case SET_RESET_PASSWORD_SUCCESS: {
            return { ...state, resetFailed: false, resetRequest: false };
        }
        case SET_RESET_PASSWORD_FAILED: {
            return { ...state, resetFailed: true };
        }
        case SET_REGISTER_REQUEST: {
            return { ...state, registerRequest: true };
        }
        case SET_REGISTER_SUCCESS: {
            return {
                ...state,
                registerFailed: false,
                registerRequest: false,
                name: action.user.name,
                email: action.user.email
            };
        }
        case SET_REGISTER_FAILED: {
            return { ...state, registerFailed: true };
        }
        case SET_LOGIN_REQUEST: {
            return { ...state, loginRequest: true };
        }
        case SET_LOGIN_SUCCESS: {
            return {
                ...state,
                loginFailed: false,
                loginRequest: false,
                name: action.user.name,
                email: action.user.email,
                isLoggedIn : true
            };
        }
        case SET_LOGIN_FAILED: {
            return { ...state, loginFailed: true  , isLoggedIn : false };
        }
        case SET_LOGOUT_REQUEST: {
            return { ...state, logoutRequest: true };
        }
        case SET_LOGOUT_SUCCESS: {
            return { ...userInitialState, logoutFailed: false, logoutRequest: false  , isLoggedIn : false };
        }
        case SET_LOGOUT_FAILED: {
            return { ...state, logoutFailed: true };
        }
        case SET_USER_REQUEST: {
            return { ...state, authRequest: true };
        }
        case SET_USER_SUCCESS: {
            return { ...state,
                name: action.user.name,
                email: action.user.email };
        }
        case SET_USER_FAILED: {
            return { ...state, authFailed: true  , isLoggedIn : false };
        }
        case SET_USER_UPDATE_REQUEST: {
            return { ...state, authRequest: true };
        }
        case SET_USER_UPDATE_SUCCESS: {
            return {
                ...state,
                authFailed: false,
                authRequest: false,
                name: action.user.name,
                email: action.user.email,
                isLoggedIn : true
            };
        }
        case SET_USER_UPDATE_FAILED: {
            return { ...state, authFailed: true};
        }
        case SET_TOKEN_REQUEST: {
            return { ...state, tokenRequest: true };
        }
        case SET_TOKEN_SUCCESS: {
            return { ...state, tokenFailed: false, tokenRequest: false , isLoggedIn : true };
        }
        case SET_TOKEN_FAILED: {
            return { ...state, tokenFailed: true  , isLoggedIn : false };
        }
        default: {
            return state;
        }
    }
}