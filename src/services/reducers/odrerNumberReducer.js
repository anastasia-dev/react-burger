import {SHOW_ORDER_NUMBER, SHOW_ORDER_NUMBER_FAILED, CLEAR_ORDER_NUMBER} from "../actions/orderNumber";

const orderNumberInitialState = {
    orderNumber: null,
    getOrderNumberLoad: true,
    orderNumberFailed: false
};

export const orderNumberReducer = (state = orderNumberInitialState, action) => {
    switch (action.type) {
        case SHOW_ORDER_NUMBER: {
            return {
                orderNumber: action.data,
                getOrderNumberLoad: false,
                orderNumberFailed: false
            };
        }
        case SHOW_ORDER_NUMBER_FAILED: {
            return {
                orderNumber: action.data,
                getOrderNumberLoad: false,
                orderNumberFailed: true
            };
        }
        case CLEAR_ORDER_NUMBER: {
            return {
                orderNumber: null,
                getOrderNumberLoad: true,
                orderNumberFailed: false
            }
        }
        default: {
            return state
        }
    }
}