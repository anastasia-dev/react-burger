import { SHOW_ORDER_NUMBER_REQUEST, SHOW_ORDER_NUMBER_SUCCESS, SHOW_ORDER_NUMBER_ERROR, CLEAR_ORDER_NUMBER, OrderNumberActions} from "../actions/orderNumber";

type OrderNumberState = {
    orderNumber? : string,
    orderNumberSuccess : boolean,
    orderNumberLoading : boolean,
    orderNumberFailed : boolean
}

export const orderNumberInitialState : OrderNumberState = {
    orderNumber: undefined,
    orderNumberSuccess: false,
    orderNumberLoading: false,
    orderNumberFailed: false
};

export const orderNumberReducer = (state : OrderNumberState = orderNumberInitialState, action : OrderNumberActions) : OrderNumberState=> {
    switch (action.type) {
        case SHOW_ORDER_NUMBER_REQUEST: {
            return {
                ...state,
                orderNumberLoading: true,
                orderNumberSuccess: false,
                orderNumberFailed: false
            };
        }
        case SHOW_ORDER_NUMBER_SUCCESS: {
            return {
                orderNumber: action.data,
                orderNumberLoading: false,
                orderNumberSuccess: true,
                orderNumberFailed: false
            };
        }
        case SHOW_ORDER_NUMBER_ERROR: {
            return {
                orderNumberLoading: false,
                orderNumberSuccess: false,
                orderNumberFailed: true
            };
        }
        case CLEAR_ORDER_NUMBER: {
            return {
                orderNumber: undefined,
                orderNumberLoading: false,
                orderNumberSuccess: false,
                orderNumberFailed: false,
            }
        }
        default: {
            return state
        }
    }
}