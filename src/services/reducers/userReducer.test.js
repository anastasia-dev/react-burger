import { SET_FORGOT_PASSWORD_FAILED, SET_FORGOT_PASSWORD_REQUEST, SET_FORGOT_PASSWORD_SUCCESS, SET_LOGIN_FAILED, SET_LOGIN_REQUEST, SET_LOGIN_SUCCESS, SET_LOGOUT_FAILED, SET_LOGOUT_REQUEST, SET_LOGOUT_SUCCESS, SET_REGISTER_FAILED, SET_REGISTER_REQUEST, SET_REGISTER_SUCCESS, SET_TOKEN_FAILED, SET_TOKEN_REQUEST, SET_TOKEN_SUCCESS, SET_USER_FAILED, SET_USER_REQUEST, SET_USER_UPDATE_FAILED, SET_USER_UPDATE_REQUEST, SET_USER_UPDATE_SUCCESS } from "../actions/userRegistration";
import { userInitialState, userReducer } from "./userReducer";

describe("user reducer", () => {
    it("should return the reducer inital state", () => {
        expect(userReducer(undefined, {})).toEqual(userInitialState);
    });

    it("should handle SET_FORGOT_PASSWORD_REQUEST", () => {
        expect(userReducer({
            ...userInitialState,
            forgotRequest: false,
         }, {
            type: SET_FORGOT_PASSWORD_REQUEST
         })).toEqual({
            ...userInitialState,
            forgotRequest : true,
         });
    })

    it("should handle SET_FORGOT_PASSWORD_FAILED", () => {
        expect(userReducer({
            ...userInitialState,
            forgotFailed: false 
        }, {
            type: SET_FORGOT_PASSWORD_FAILED
        })).toEqual({
            ...userInitialState,
            forgotFailed : true
        });
    })

    it("should handle SET_FORGOT_PASSWORD_SUCCESS", () => {
        expect(userReducer({
            ...userInitialState,
            forgotFailed: true,
            forgotRequest: true 
        }, {
            type: SET_FORGOT_PASSWORD_SUCCESS
        })).toEqual({
            ...userInitialState,
            forgotFailed : false,
            forgotRequest : false
        });
    })

    it("should handle SET_REGISTER_REQUEST", () => {
        expect(userReducer({
            ...userInitialState,
            registerRequest: false,
         }, {
            type: SET_REGISTER_REQUEST
         })).toEqual({
            ...userInitialState,
            registerRequest : true,
         });
    })

    it("should handle SET_REGISTER_FAILED", () => {
        expect(userReducer({
            ...userInitialState,
            registerFailed: false 
        }, {
            type: SET_REGISTER_FAILED
        })).toEqual({
            ...userInitialState,
            registerFailed : true
        });
    })

    const testName = "testName"
    const testEmail = "testEmail"

    it("should handle SET_REGISTER_SUCCESS", () => {
        expect(userReducer({
            ...userInitialState,
            registerFailed: true,
            registerRequest: true 
        }, {
            type: SET_REGISTER_SUCCESS,
            user: {
                name: testName,
                email: testEmail
            }
        })).toEqual({
            ...userInitialState,
            registerFailed : false,
            registerRequest : false,
            name: testName,
            email: testEmail
        });
    })

    it("should handle SET_LOGIN_REQUEST", () => {
        expect(userReducer({
            ...userInitialState,
            loginRequest: false,
         }, {
            type: SET_LOGIN_REQUEST
         })).toEqual({
            ...userInitialState,
            loginRequest : true,
         });
    })

    it("should handle SET_LOGIN_FAILED", () => {
        expect(userReducer({
            ...userInitialState,
            loginFailed: false,
        }, {
            type: SET_LOGIN_FAILED
        })).toEqual({
            ...userInitialState,
            loginFailed : true,
        });
    })

    it("should handle SET_LOGIN_SUCCESS", () => {
        expect(userReducer({
            ...userInitialState,
            loginFailed: false,
        }, {
            type: SET_LOGIN_SUCCESS,
            user: {
                name: testName,
                email: testEmail
            }
        })).toEqual( {
            ...userInitialState,
            name: testName,
            email: testEmail,
            isLoggedIn : true
        });
    })



    it("should handle SET_LOGOUT_REQUEST", () => {
        expect(userReducer({
            ...userInitialState,
            logoutRequest: false,
         }, {
            type: SET_LOGOUT_REQUEST
         })).toEqual({
            ...userInitialState,
            logoutRequest : true,
         });
    })

    it("should handle SET_LOGOUT_FAILED", () => {
        expect(userReducer({
            ...userInitialState,
            logoutFailed: false 
        }, {
            type: SET_LOGOUT_FAILED
        })).toEqual({
            ...userInitialState,
            logoutFailed : true
        });
    })

    it("should handle SET_LOGOUT_SUCCESS", () => {
        expect(userReducer({
            ...userInitialState,
            name: "name",
            email: "email",
            isLoggedIn: true
        }, {
            type: SET_LOGOUT_SUCCESS
        })).toEqual(userInitialState);
    })


    it("should handle SET_USER_REQUEST", () => {
        expect(userReducer({
            ...userInitialState,
            authRequest: false
        }, {
            type: SET_USER_REQUEST
        })).toEqual({
            ...userInitialState,
            authRequest: true
        });
    })

    it("should handle SET_USER_FAILED", () => {
        expect(userReducer({
            ...userInitialState,
            authFailed: false,
            isLoggedIn: true
        }, {
            type: SET_USER_FAILED
        })).toEqual({
            ...userInitialState,
            authFailed: true,
            isLoggedIn: false
        });
    })

    it("should handle SET_USER_UPDATE_REQUEST", () => {
        expect(userReducer({
            ...userInitialState,
            authRequest: false,
        }, {
            type: SET_USER_UPDATE_REQUEST
        })).toEqual({
            ...userInitialState,
            authRequest: true,
        });
    })

    it("should handle SET_USER_UPDATE_FAILED", () => {
        expect(userReducer({
            ...userInitialState,
            authFailed: false,
        }, {
            type: SET_USER_UPDATE_FAILED
        })).toEqual({
            ...userInitialState,
            authFailed: true,
        });
    })

    it("should handle SET_USER_UPDATE_SUCCESS", () => {
        expect(userReducer({
            ...userInitialState,
            authFailed: true,
            authRequest: true,
        }, {
            type: SET_USER_UPDATE_SUCCESS,
            user: {
                name: "name",
                email: "email"
            }
        })).toEqual({
            ...userInitialState,
            authFailed: false,
            authRequest: false,
            name: "name",
            email: "email",
            isLoggedIn: true
        });
    })

    it("should handle SET_TOKEN_REQUEST", ()=>{
        expect(userReducer(userInitialState, {
            type: SET_TOKEN_REQUEST,
        })).toEqual({
            ...userInitialState,
            tokenRequest: true,
        });
    })

    it("should handle SET_TOKEN_FAILED", ()=>{
        expect(userReducer({
            ...userInitialState,
            isLoggedIn: true
        }, {
            type: SET_TOKEN_FAILED,
        })).toEqual({
            ...userInitialState,
            tokenFailed: true,
            isLoggedIn: false
        });
    })

    it("should handle SET_TOKEN_SUCCESS", ()=>{
        expect(userReducer({
            ...userInitialState,
            tokenRequest: true,
            tokenFailed: true
        }, {
            type: SET_TOKEN_SUCCESS,
        })).toEqual({
            ...userInitialState,
            tokenRequest: false,
            tokenFailed: false,
            isLoggedIn: true
        });
    })
})
