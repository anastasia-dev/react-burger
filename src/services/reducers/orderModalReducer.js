import {HIDE_INGREDIENT_DETAILS, SHOW_INGREDIENT_DETAILS} from "../actions/ingredientDetails";
import {getOrderNumber} from "../../utils/getOrderNumber";

const orderModalInitialState = {
    orderNumber: null
}

export function  ingredientDetailsReducer (state = orderModalInitialState, action) {
    switch (action.type) {
        case SHOW_INGREDIENT_DETAILS: {
            return { orderNumber: action.number };
        }
        case HIDE_INGREDIENT_DETAILS: {
            return { orderNumber: null };
        }
        default:{
            return state;
        }
    }
}