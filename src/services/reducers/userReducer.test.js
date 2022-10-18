import { SET_FORGOT_PASSWORD_FAILED, SET_FORGOT_PASSWORD_REQUEST, SET_FORGOT_PASSWORD_SUCCESS, SET_LOGIN_FAILED, SET_LOGIN_REQUEST, SET_LOGIN_SUCCESS, SET_LOGOUT_FAILED, SET_LOGOUT_REQUEST, SET_LOGOUT_SUCCESS, SET_REGISTER_FAILED, SET_REGISTER_REQUEST, SET_REGISTER_SUCCESS, SET_TOKEN_FAILED, SET_TOKEN_REQUEST, SET_TOKEN_SUCCESS, SET_USER_FAILED, SET_USER_REQUEST, SET_USER_UPDATE_FAILED, SET_USER_UPDATE_REQUEST, SET_USER_UPDATE_SUCCESS } from "../actions/userRegistration";
import { userReducer } from "./userReducer";

describe("user reducer", () => {
    it("should return the reducer inital state", () => {
        expect(userReducer(undefined, {})).toEqual({
            name: '',
            email: '',
            isLoggedIn : false,
        
            registerRequest: false,
            registerFailed: false,
        
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
        });
    });

    const initalState = {
        name: '',
        email: '',
        isLoggedIn : false,

        registerRequest: false,
        registerFailed: false,

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
    };

    it("should handle SET_FORGOT_PASSWORD_REQUEST", () => {
        expect(userReducer({
            ...initalState,
            forgotRequest: false,
         }, {
            type: SET_FORGOT_PASSWORD_REQUEST
         })).toEqual({
            ...initalState,
            forgotRequest : true,
         });
    })

    it("should handle SET_FORGOT_PASSWORD_FAILED", () => {
        expect(userReducer({
            ...initalState,
            forgotFailed: false 
        }, {
            type: SET_FORGOT_PASSWORD_FAILED
        })).toEqual({
        ...initalState,
        forgotFailed : true
        });
    })

    it("should handle SET_FORGOT_PASSWORD_SUCCESS", () => {
        expect(userReducer({
            ...initalState,
            forgotFailed: true,
            forgotRequest: true 
        }, {
            type: SET_FORGOT_PASSWORD_SUCCESS
        })).toEqual({
            ...initalState,
            forgotFailed : false,
            forgotRequest : false
        });
    })

    it("should handle SET_REGISTER_REQUEST", () => {
        expect(userReducer({
            ...initalState,
            registerRequest: false,
         }, {
            type: SET_REGISTER_REQUEST
         })).toEqual({
            ...initalState,
            registerRequest : true,
         });
    })

    it("should handle SET_REGISTER_FAILED", () => {
        expect(userReducer({
            ...initalState,
            registerFailed: false 
        }, {
            type: SET_REGISTER_FAILED
        })).toEqual({
            ...initalState,
            registerFailed : true
        });
    })

    it("should handle SET_REGISTER_SUCCESS", () => {
        expect(userReducer({
            ...initalState,
            registerFailed: true,
            registerRequest: true 
        }, {
            type: SET_REGISTER_SUCCESS,
            user: {
                name: "name",
                email: "email"
            }
        })).toEqual({
            ...initalState,
            registerFailed : false,
            registerRequest : false,
            name: "name",
            email: "email"
        });
    })



    it("should handle SET_LOGIN_REQUEST", () => {
        expect(userReducer({
            ...initalState,
            loginRequest: false,
         }, {
            type: SET_LOGIN_REQUEST
         })).toEqual({
            ...initalState,
            loginRequest : true,
         });
    })

    it("should handle SET_LOGIN_FAILED", () => {
        expect(userReducer({
            ...initalState,
            loginFailed: false,
        }, {
            type: SET_LOGIN_FAILED
        })).toEqual({
            ...initalState,
            loginFailed : true,
        });
    })

    it("should handle SET_LOGIN_SUCCESS", () => {
        expect(userReducer({
            ...initalState,
            loginFailed: false,
        }, {
            type: SET_LOGIN_SUCCESS,
            user: {
                name: "name",
                email: "email"
            }
        })).toEqual( {
            ...initalState,
            name: "name",
            email: "email",
            isLoggedIn : true
        });
    })



    it("should handle SET_LOGOUT_REQUEST", () => {
        expect(userReducer({
            ...initalState,
            logoutRequest: false,
         }, {
            type: SET_LOGOUT_REQUEST
         })).toEqual({
            ...initalState,
            logoutRequest : true,
         });
    })

    it("should handle SET_LOGOUT_FAILED", () => {
        expect(userReducer({
            ...initalState,
            logoutFailed: false 
        }, {
            type: SET_LOGOUT_FAILED
        })).toEqual({
            ...initalState,
            logoutFailed : true
        });
    })

    it("should handle SET_LOGOUT_SUCCESS", () => {
        expect(userReducer({
            ...initalState,
            name: "name",
            email: "email",
            isLoggedIn: true
        }, {
            type: SET_LOGOUT_SUCCESS
        })).toEqual(initalState);
    })


    it("should handle SET_USER_REQUEST", () => {
        expect(userReducer({
            ...initalState,
            authRequest: false
        }, {
            type: SET_USER_REQUEST
        })).toEqual({
            ...initalState,
            authRequest: true
        });
    })

    it("should handle SET_USER_FAILED", () => {
        expect(userReducer({
            ...initalState,
            authFailed: false,
            isLoggedIn: true
        }, {
            type: SET_USER_FAILED
        })).toEqual({
            ...initalState,
            authFailed: true,
            isLoggedIn: false
        });
    })

    it("should handle SET_USER_UPDATE_REQUEST", () => {
        expect(userReducer({
            ...initalState,
            authRequest: false,
        }, {
            type: SET_USER_UPDATE_REQUEST
        })).toEqual({
            ...initalState,
            authRequest: true,
        });
    })

    it("should handle SET_USER_UPDATE_FAILED", () => {
        expect(userReducer({
            ...initalState,
            authFailed: false,
        }, {
            type: SET_USER_UPDATE_FAILED
        })).toEqual({
            ...initalState,
            authFailed: true,
        });
    })

    it("should handle SET_USER_UPDATE_SUCCESS", () => {
        expect(userReducer({
            ...initalState,
            authFailed: true,
            authRequest: true,
        }, {
            type: SET_USER_UPDATE_SUCCESS,
            user: {
                name: "name",
                email: "email"
            }
        })).toEqual({
            ...initalState,
            authFailed: false,
            authRequest: false,
            name: "name",
            email: "email",
            isLoggedIn: true
        });
    })

    it("should handle SET_TOKEN_REQUEST", ()=>{
        expect(userReducer(initalState, {
            type: SET_TOKEN_REQUEST,
        })).toEqual({
            ...initalState,
            tokenRequest: true,
        });
    })

    it("should handle SET_TOKEN_FAILED", ()=>{
        expect(userReducer({
            ...initalState,
            isLoggedIn: true
        }, {
            type: SET_TOKEN_FAILED,
        })).toEqual({
            ...initalState,
            tokenFailed: true,
            isLoggedIn: false
        });
    })

    it("should handle SET_TOKEN_SUCCESS", ()=>{
        expect(userReducer({
            ...initalState,
            tokenRequest: true,
            tokenFailed: true
        }, {
            type: SET_TOKEN_SUCCESS,
        })).toEqual({
            ...initalState,
            tokenRequest: false,
            tokenFailed: false,
            isLoggedIn: true
        });
    })
})
