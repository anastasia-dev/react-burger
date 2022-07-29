import {SHOW_INGREDIENT_DETAILS, HIDE_INGREDIENT_DETAILS} from "../actions/ingredientDetails";

const ingredientDetailsInitialState = {
    item: null
};

export function  ingredientDetailsReducer (state = ingredientDetailsInitialState, action) {
    switch (action.type) {
        case SHOW_INGREDIENT_DETAILS: {
            return { item: action.item };
        }
        case HIDE_INGREDIENT_DETAILS: {
            return { item: null };
        }
        default:{
            return state;
        }
    }
}
