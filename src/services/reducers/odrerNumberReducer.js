import { SHOW_ORDER_NUMBER_REQUEST, SHOW_ORDER_NUMBER_SUCCESS, SHOW_ORDER_NUMBER_ERROR, CLEAR_ORDER_NUMBER} from "../actions/orderNumber";

const orderNumberInitialState = {
    orderNumber: null,
    orderNumberSuccess: false,
    orderNumberLoading: true,
    orderNumberFailed: false
};

export const orderNumberReducer = (state = orderNumberInitialState, action) => {
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
                orderNumber: action.data,
                orderNumberLoading: false,
                orderNumberSuccess: false,
                orderNumberFailed: true
            };
        }
        case CLEAR_ORDER_NUMBER: {
            return {
                orderNumber: null,
                orderNumberLoading: true,
                orderNumberSuccess: false,
                orderNumberFailed: false,
            }
        }
        default: {
            return state
        }
    }
}