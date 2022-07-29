import {
    SHOW_INGREDIENTS,
    SHOW_INGREDIENTS_ERROR
} from "../actions/ingredients";


const ingredientsInitialState = {
    dataContent: [],
    ingredientsLoading: true,
    ingredientsFailed: false
}

export const ingredientsReducer = (state = ingredientsInitialState, action) => {
    switch (action.type) {
        case SHOW_INGREDIENTS: {
            return {
                ...state,
                dataContent: action.data,
                ingredientsLoading: false,
                ingredientsFailed: false,
            };
        }
        case SHOW_INGREDIENTS_ERROR: {
            return {
                ...state,
                dataContent: action.data,
                ingredientsLoading: false,
                ingredientsFailed: true,
            };
        }
        default: {
            return state
        }
    }
}