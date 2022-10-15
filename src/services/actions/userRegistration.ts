export const SET_FORGOT_PASSWORD_REQUEST : 'SET_FORGOT_PASSWORD_REQUEST' = 'SET_FORGOT_PASSWORD_REQUEST';
export const SET_FORGOT_PASSWORD_SUCCESS :'SET_FORGOT_PASSWORD_SUCCESS' = 'SET_FORGOT_PASSWORD_SUCCESS';
export const SET_FORGOT_PASSWORD_FAILED :'SET_FORGOT_PASSWORD_FAILED' = 'SET_FORGOT_PASSWORD_FAILED';

export const SET_RESET_PASSWORD_REQUEST :'SET_FORGOT_PASSWORD_REQUEST' = 'SET_FORGOT_PASSWORD_REQUEST';
export const SET_RESET_PASSWORD_SUCCESS :'SET_FORGOT_PASSWORD_SUCCESS' = 'SET_FORGOT_PASSWORD_SUCCESS';
export const SET_RESET_PASSWORD_FAILED :'SET_FORGOT_PASSWORD_FAILED' = 'SET_FORGOT_PASSWORD_FAILED';

export const SET_REGISTER_REQUEST :'SET_REGISTER_REQUEST' = 'SET_REGISTER_REQUEST';
export const SET_REGISTER_SUCCESS :'SET_REGISTER_SUCCESS' = 'SET_REGISTER_SUCCESS';
export const SET_REGISTER_FAILED :'SET_REGISTER_FAILED' = 'SET_REGISTER_FAILED';

export const SET_LOGIN_REQUEST :'SET_LOGIN_REQUEST' = 'SET_LOGIN_REQUEST';
export const SET_LOGIN_SUCCESS :'SET_LOGIN_SUCCESS' = 'SET_LOGIN_SUCCESS';
export const SET_LOGIN_FAILED :'SET_LOGIN_FAILED' = 'SET_LOGIN_FAILED';

export const SET_LOGOUT_REQUEST :'SET_LOGOUT_REQUEST' = 'SET_LOGOUT_REQUEST';
export const SET_LOGOUT_SUCCESS :'SET_LOGOUT_SUCCESS' = 'SET_LOGOUT_SUCCESS';
export const SET_LOGOUT_FAILED :'SET_LOGOUT_FAILED' = 'SET_LOGOUT_FAILED';

export const SET_USER_REQUEST :'SET_USER_REQUEST' = 'SET_USER_REQUEST';
export const SET_USER_SUCCESS :'SET_USER_SUCCESS' = 'SET_USER_SUCCESS';
export const SET_USER_FAILED :'SET_USER_FAILED' = 'SET_USER_FAILED';

export const SET_TOKEN_REQUEST :'SET_TOKEN_REQUEST' = 'SET_TOKEN_REQUEST';
export const SET_TOKEN_SUCCESS :'SET_TOKEN_SUCCESS' = 'SET_TOKEN_SUCCESS';
export const SET_TOKEN_FAILED :'SET_TOKEN_FAILED' = 'SET_TOKEN_FAILED';

export const SET_USER_UPDATE_REQUEST :'SET_USER_UPDATE_REQUEST' = 'SET_USER_UPDATE_REQUEST';
export const SET_USER_UPDATE_SUCCESS :'SET_USER_UPDATE_SUCCESS' = 'SET_USER_UPDATE_SUCCESS';
export const SET_USER_UPDATE_FAILED :'SET_USER_UPDATE_FAILED' = 'SET_USER_UPDATE_FAILED';

interface IUser {
    name: string;
    email: string;
}
interface ISetForgotPasswordRequestAction {
    type : typeof SET_FORGOT_PASSWORD_REQUEST
}
interface ISetForgotPasswordSuccessAction {
    type : typeof SET_FORGOT_PASSWORD_SUCCESS
}
interface ISetForgotPasswordFailedAction {
    type : typeof SET_FORGOT_PASSWORD_FAILED
}

interface ISetResetPasswordRequestAction {
    type : typeof SET_RESET_PASSWORD_REQUEST
}
interface ISetResetPasswordSuccessAction {
    type : typeof SET_RESET_PASSWORD_SUCCESS
}
interface ISetResetPasswordFailedAction {
    type : typeof SET_RESET_PASSWORD_FAILED
}

interface ISetRegisterRequestAction {
    type : typeof SET_REGISTER_REQUEST
}
interface ISetRegisterSuccessAction {
    type : typeof SET_REGISTER_SUCCESS
    user : IUser
}
interface ISetRegisterFailedAction {
    type : typeof SET_REGISTER_FAILED
}

interface ISetLoginRequestAction {
    type : typeof SET_LOGIN_REQUEST
}
interface ISetLoginSuccessAction {
    type : typeof SET_LOGIN_SUCCESS,
    user : IUser
}
interface ISetLoginFailedAction {
    type : typeof SET_LOGIN_FAILED
}

interface ISetLogoutRequestAction {
    type : typeof SET_LOGOUT_REQUEST
}
interface ISetLogoutSuccessAction {
    type : typeof SET_LOGOUT_SUCCESS
}
interface ISetLogoutFailedAction {
    type : typeof SET_LOGOUT_FAILED
}

interface ISetUserRequestAction {
    type : typeof SET_USER_REQUEST
}
interface ISetUserSuccessAction {
    type : typeof SET_USER_SUCCESS,
    user : IUser
}
interface ISetUserFailedAction {
    type : typeof SET_USER_FAILED
}

interface ISetTokenRequestAction {
    type : typeof SET_TOKEN_REQUEST
}
interface ISetTokenSuccessAction {
    type : typeof SET_TOKEN_SUCCESS
}
interface ISetTokenFailedAction {
    type : typeof SET_TOKEN_FAILED
}

interface ISetUserUpdateRequestAction {
    type : typeof SET_USER_UPDATE_REQUEST
}
interface ISetUserUpdateSuccessAction {
    type : typeof SET_USER_UPDATE_SUCCESS,
    user : IUser
}
interface ISetUserUpdateFailedAction {
    type : typeof SET_USER_UPDATE_FAILED
}

export type UserActions = 
    ISetForgotPasswordRequestAction |
    ISetForgotPasswordSuccessAction |
    ISetForgotPasswordFailedAction |
    ISetResetPasswordRequestAction |
    ISetResetPasswordSuccessAction |
    ISetResetPasswordFailedAction |
    ISetRegisterRequestAction |
    ISetRegisterSuccessAction |
    ISetRegisterFailedAction |
    ISetLoginRequestAction |
    ISetLoginSuccessAction |
    ISetLoginFailedAction |
    ISetLogoutRequestAction |
    ISetLogoutSuccessAction |
    ISetLogoutFailedAction |
    ISetUserRequestAction |
    ISetUserSuccessAction |
    ISetUserFailedAction |
    ISetTokenRequestAction |
    ISetTokenSuccessAction |
    ISetTokenFailedAction |
    ISetUserUpdateRequestAction |
    ISetUserUpdateSuccessAction |
    ISetUserUpdateFailedAction;